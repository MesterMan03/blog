import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

export default {
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
            md.use(mathjax3);
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
        lastUpdatedText: "Last updated on",
        logo: '/favicon/favicon.ico',

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
                    }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/noClaps/blog' }
        ],

        editLink: {
            pattern: 'https://github.com/noClaps/blog/edit/main/docs/:path',
            text: 'Edit this page'
        }
    },

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/blog/favicon/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/blog/favicon/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/blog/favicon/favicon-16x16.png' }],
        ['link', { rel: 'mask-icon', href: '/blog/favicon/safari-pinned-tab.svg', color: '#000000' }],
        ['link', { rel: 'shortcut-icon', href: '/blog/favicon/favicon.ico' }]
    ]

}
