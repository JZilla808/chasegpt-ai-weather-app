import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject> | null = null;

export const getClient = (): ApolloClient<NormalizedCacheObject> => {
  if (!client) {
    client = new ApolloClient({
      uri: process.env.API_URL,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
      },
    });
  }

  return client;
};
