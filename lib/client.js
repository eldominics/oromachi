import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '3h5g1ava',
    dataset: 'production',
    apiVersion: '2022-11-22',
    useCdn: 'true',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (Source) => builder.image(Source);