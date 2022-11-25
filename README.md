# The Blog of Random

This is the source code for [The Blog of Random](https://blog.zerolimits.dev).

Have a look around. If you find any bugs, you can open an issue or PR and I'll probably have a look and update the pages with the correct information.

Enjoy!

## Build instructions

1.  ```bash
    git clone https://github.com/noClaps/blog.git && cd blog
    ```

2.  ```bash
    npm install
    npm run dev
    ```
    Run this in the root directory (`blog/` if you followed the instructions above), and open `localhost:3000` in your desired browser to see the preview. Make sure to keep this repository and your dependencies up-to-date, especially if you plan to contribute.

3. ```bash
   npm run build
   ```
   This builds the site (excluding any draft posts, to include them add `--drafts` to the end of the command) and places the files in the `dist/` directory.
    

## Licenses
The licenses of all NPM dependencies are in their respective folders in `node_modules/` when you install them with `npm install`.

[Astro](https://astro.build), the static site generator used to generate this website, is licensed under the [MIT license](https://github.com/withastro/astro/blob/main/LICENSE).

The favicon and icons come from [Octicons](https://primer.style/octicons) and are licensed under the [MIT license](public/svg/LICENSE).

[KaTeX](https://katex.org) is licensed under the [MIT license](https://github.com/KaTeX/KaTeX/blob/main/LICENSE).

The [Inter](https://rsms.me/inter/) and [Patua One](https://fonts.google.com/specimen/Patua+One) fonts are licensed under the [OFL-1.1 license](https://github.com/rsms/inter/blob/master/LICENSE.txt).

All of the remaining content in this repository is licensed under the [BSD Zero Clause license](LICENSE).