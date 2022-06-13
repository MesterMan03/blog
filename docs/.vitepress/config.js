import { defineConfig } from 'vitepress';
import markdownItKatex from 'markdown-it-katex';

const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml'
]

export default defineConfig({
    base: '/blog/',
    lang: 'en-US',
    title: "The Blog of Random",
    description: "A blog about the most random things you've ever heard of",
    lastUpdated: true,

    markdown: {
        theme: 'material-default',
        config: (md) => {
            md.use(require('markdown-it-sup'));
            md.use(require('markdown-it-abbr'));
            md.use(require('markdown-it-task-lists'));
            md.use(markdownItKatex)
        }
    },

    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag)
            }
        }
    },

    themeConfig: {
        siteTitle: "The Blog of Random",

        nav: [
            {
                text: 'Science',
                items: [
                    { text: 'Chaos Theory', link: '/chaos-theory' },
                    { text: 'Collatz Conjecture', link: '/collatz-conjecture' }
                ]
            },
            {
                text: 'History',
                items: [
                    { text: 'History of Toilet Paper', link: '/history-of-toilet-paper' },
                    { text: 'The Phalanx Formation', link: '/the-phalanx-formation' }
                ]
            },
            {
                text: 'Tech',
                items: [
                    {
                        text: 'Privacy, Security, Anonymity',
                        items: [
                            { text: 'Intro', link: '/psa/intro' },
                            { text: 'Messengers', link: '/psa/messengers' }
                        ]
                    },
                    { text: 'Google: A Misrepresented Evil', link: '/google' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/noClaps' }
        ],

        editLink: {
            pattern: 'https://github.com/noClaps/blog/edit/main/docs/:path',
            text: 'Edit this page'
        },

        footer: {
            message: 'Released under the Unlicense.'
        }
    }
})