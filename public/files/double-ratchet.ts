const crypto = window.crypto.subtle;

// global hkdf info constant, can be anything
const hkdfInfo = new TextEncoder().encode("Created by Mester");

function toHex(buffer: ArrayBuffer) {
    return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

/** 
 * A single symmetric ratchet that can turn and return a message key
 */
class SymRatchet {
    // set the state to a private member, so it cannot be accessed from outside
    #state: Uint8Array = new Uint8Array();

    constructor(seed: Uint8Array) {
        if (seed.byteLength !== 32) throw new Error("Invalid seed length");
        this.#state = seed;
    }

    async turn() {
        const state = await crypto.importKey("raw", this.#state, "HKDF", false, ["deriveBits"]);

        // create a new state, the salt is just a single 0 byte
        const newState = await crypto.deriveBits({ name: "HKDF", hash: "SHA-512", salt: new Uint8Array([0]), info: hkdfInfo }, state, 64 * 8);

        // set the state to the first 32 bytes
        this.#state = new Uint8Array(newState, 0, 32);

        // return the last 32 bytes (used for message encryption/decryption)
        return new Uint8Array(newState, 32, 32);
    }
}

/**
 * A Diffie-Hellman ratchet used to provide forward secrecy
 */
class DHRatchet {
    #state: Uint8Array = new Uint8Array();
    #keyChain: CryptoKeyPair;

    async init(seed: Uint8Array) {
        if (seed.byteLength !== 32) throw new Error("Invalid seed length");
        this.#state = seed;

        // generate a key pair
        this.#keyChain = await crypto.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
    }

    getPubkey() {
        return crypto.exportKey("raw", this.#keyChain.publicKey);
    }

    async turn(pubkey: ArrayBuffer, newKey: boolean = false) {
        // if needed, generate a new key pair
        if (newKey) {
            this.#keyChain = await crypto.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
        }

        // import the public key
        const publicKey = await crypto.importKey("raw", pubkey, { name: "ECDH", namedCurve: "P-256" }, false, []);

        // derive a new DH output
        const dhOutput = await crypto.deriveBits({ name: "ECDH", public: publicKey }, this.#keyChain.privateKey, 32 * 8);

        // use the DH output as the HKDF salt
        const state = await crypto.importKey("raw", this.#state, { name: "HKDF" }, false, ["deriveBits"]);
        const newState = await crypto.deriveBits({ name: "HKDF", hash: "SHA-512", salt: dhOutput, info: hkdfInfo }, state, 64 * 8);

        // set the state to the first 32 bytes and the final output to the last 32 bytes
        this.#state = new Uint8Array(newState, 0, 32);
        const final = new Uint8Array(newState, 32, 32);

        return final;
    }

    static async build(seed: Uint8Array) {
        const dr = new DHRatchet();
        await dr.init(seed);

        return dr;
    }
}

/**
 * A double ratchet that can encrypt and decrypt messages
 */
class DoubleRatchet {
    root: DHRatchet;
    #send: SymRatchet;
    #receive: SymRatchet;

    constructor() {
        this.root = new DHRatchet();
    }

    async setup(ratchet: "send" | "receive", pubkey: ArrayBuffer, newKey: boolean = false) {
        const dhOutput = await this.root.turn(pubkey, newKey);

        if (ratchet === "send") this.#send = new SymRatchet(dhOutput);
        else this.#receive = new SymRatchet(dhOutput);
    }

    async encrypt(message: ArrayBuffer) {
        // generate random IV
        const iv = window.crypto.getRandomValues(new Uint8Array(12));

        // turn the send ratchet to create a message key
        const messageKey = await crypto.importKey("raw", await this.#send.turn(), { name: "AES-GCM", }, false, ["encrypt"]);
        const ciphertext = await crypto.encrypt({ name: "AES-GCM", iv }, messageKey, message);

        return { iv, ciphertext };
    }

    async decrypt(ciphertext: ArrayBuffer, iv: ArrayBuffer) {
        // turn the receive ratchet to create a message key
        const messageKey = await crypto.importKey("raw", await this.#receive.turn(), { name: "AES-GCM", }, false, ["decrypt"]);
        const message = await crypto.decrypt({ name: "AES-GCM", iv }, messageKey, ciphertext);

        return message;
    }

    static async build(seed: Uint8Array) {
        const dr = new DoubleRatchet();
        dr.root = await DHRatchet.build(seed);

        return dr;
    }
}