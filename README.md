# The Blog of Random

This is the source code for [The Blog of Random](https://noClaps.github.io/blog/).

Have a look around. If you find any bugs, you can open an issue or PR and I'll probably have a look and update the pages with the correct information.

Enjoy!

---

## Credits

- [Mozilla's MDN Web Docs](https://developer.mozilla.org/en-US/) for some of the best documentation I have ever seen. I've learned so much about web development simply from going through their docs.

- [W3Schools](https://www.w3schools.com/) for their awesome tutorials. Their explanations of how different aspects of HTML and CSS work are so clear, it's really great.

- [VitePress](https://vitepress.vuejs.org) for their beautiful static site generator. My entire blog is pretty much built on this, so there's no way I'm not mentioning them. Plus, the whole project is [open source](https://github.com/vuejs/vitepress), which makes it even cooler!

- all of the other projects that I've mentioned somewhere in my blog or used in the making of this blog. There's so many, it's hard to keep count!

---

## Build instructions (for testing or whatever)

1.  ```bash
    git clone https://github.com/noClaps/blog.git && cd blog
    ```

2.  ```bash
    npm install
    ```
    **Make sure your NPM version is 8.11.0 or later.** You can check this using `npm -v`. Ideally, use the latest version and stay up-to-date on all modules and changes this repo.

3.  ```bash
    npm run docs:dev
    ```
    Run this in the root directory (`blog/` if you followed the instructions above), and open `localhost:3000/blog/` in your desired browser to see the preview.