import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://grapql-exercise.onrender.com/graphql'
    }),
    cache: new InMemoryCache()
})