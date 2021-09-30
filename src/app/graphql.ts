import { ApolloClient, InMemoryCache } from "@apollo/client"

// console.log(process.env.REACT_APP_API_URL_GRAPHQL);
export const apolloClient = new ApolloClient({
    uri: process.env.REACT_APP_API_URL_GRAPHQL as any,
    cache: new InMemoryCache()
})