import { z, defineCollection } from 'astro:content';

const history = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: z.enum(["noClaps"])
    })
})

const science = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: z.enum(["noClaps"])
    })
})

const tech = defineCollection({
    schema: z.object({
        shortTitle: z.string().optional(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: z.enum(["noClaps"])
    })
})

const psa = defineCollection({
    schema: z.object({
        shortTitle: z.string().optional(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        lastmod: z.date().optional(),
        author: z.enum(["noClaps"])
    })
})

export const collections = {
    "history": history,
    "science": science,
    "tech": tech,
    "psa": psa
}
