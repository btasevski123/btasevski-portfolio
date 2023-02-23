import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "8fb590ka",
  dataset: "production",
  apiVersion: "2023-02-15",
  useCdn: true,
  token:
    "skcNk6ON7wEqhi4pJwyfBVsAcF92Ho3pe48nnGOiaaMWJ641tAVg2eCtgaYEUZl1zSloOILuOHzI9UhvDy7U6cBBChxeAKJF4cRnYjbAkfL35XHERKWHHGgvfiRrkfb1xbDy8BjjRqibzLt7uSIOiBNiq88qpHf4dM9Jh4y78ETEacpx2qOp",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
