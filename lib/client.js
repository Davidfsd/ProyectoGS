import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = SanityClient({
    projectId: "dlojv2qz",
    dataset: 'production',
    apiVersion: "2022-10-16",
    useCdn: true,
    token:
    "skWNmIKOkoOqHAcB8lSuIO86o7BS6k8iDx4118rAELtxW3dIMH6JudYvl5kEbOUOVI7en3KPsAct9w7bTVjpTDThFBuLpcTt22LzLImIHP79rcHN2IJ5SzzTgvAdnDFDNiMojMgkblORht9eb532F4z6EjurC8f0aNFtf872xqZZSFBaQ8oM"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)