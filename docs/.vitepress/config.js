export default {
    lang: 'en-US',
    title: "The Blog of Random",
    description: "A blog about the most random things you've ever heard of",
    lastUpdated: true,

    markdown: {
        theme: 'material-default',
        config: (md) => {
            md.use(require('markdown-it-sup')),
            md.use(require('markdown-it-abbr')),
            md.use(require('markdown-it-task-lists')),
            md.use(require('markdown-it-texmath'))
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
}