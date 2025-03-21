const config = {
  env: {
    apiEndPoint: process.env.NEXT_PUBLIC_API_END_POINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    },
    databaseUrl: process.env.DATABASE_URL!,
  },
};
export default config;
