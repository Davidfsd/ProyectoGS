import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: "dlojv2qz",
    dataset: 'production',
    apiVersion: "2022-10-16",
    useCdn: true,
    token:
    "skkyiXeqAIxh8BRkzJik1ytEubJ8nfBIReC5rABKlmV9yhIVCS0ounZh87ZInvfqYwXcp6nlQqAjQhTrJduITedj136RbBxyONT3Jg6L3GzSB2thNCacuFrO0OzsghZE2r118upkf4gDwsXH7mgYv8KOpRP5I7bjg2dn5RLANMPmDqLQAK8h"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)