import { z, defineCollection, reference } from 'astro:content';

const history = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: reference("authors")
    })
})

const science = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: reference("authors")
    })
})

const tech = defineCollection({
    type: "content",
    schema: z.object({
        shortTitle: z.string().optional(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: reference("authors")
    })
})

const psa = defineCollection({
    type: "content",
    schema: z.object({
        shortTitle: z.string().optional(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: reference("authors")
    })
})

const authors = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        link: z.string().url()
    })
})

export const collections = {
    "history": history,
    "science": science,
    "tech": tech,
    "psa": psa,
    "authors": authors
}
