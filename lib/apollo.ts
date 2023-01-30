import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    authorization:
      `Bearer ${process.env.NEXT_PUBLIC_PERMANENT_AUTH_TOKEN}` || "",
  },
});

export default client;
