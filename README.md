# Infinitely Random

This is the source code for [Infinitely Random](https://blog.zerolimits.dev).

Have a look around. If you find any bugs, you can open an issue or PR and I'll probably have a look and update the pages with the correct information.

Enjoy!

## Build instructions

1.  ```bash
    git clone https://github.com/noClaps/blog.git && cd blog
    ```

2.  ```bash
    hugo server -D
    ```
    Run this in the root directory (`blog/` if you followed the instructions above), and open `localhost:1313` in your desired browser to see the preview. You'll have to refresh the page every time to see updates, though you can change that if you set `disableLiveReload` to `false` in `config.yaml`. Make sure to keep Hugo up-to-date as well as this repository, especially if you plan to contribute.

3. ```bash
   hugo
   ```
   This builds the site (excluding any draft posts, to include them add `-D` to the end of the command) and places the files in the `public/` directory.
    

## Licenses

[Hugo](https://gohugo.io), the static site generator used to generate this website, is licensed under the [Apache-2.0 license](https://github.com/gohugoio/hugo/blob/master/LICENSE).

The favicon and icons come from [Octicons](https://primer.style/octicons) and are licensed under the [MIT License](static/svg/LICENSE).

[Mathjax](https://mathjax.org) is licensed under the [Apache-2.0 license](js/mathjax/LICENSE).

The fonts' licenses are in their [respective folders](static/fonts).

All of the remaining content in this repository is licensed under [the Unlicense](LICENSE).