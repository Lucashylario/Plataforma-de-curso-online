import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oac0xw1ll601xi4krb2de9/master',
    cache: new InMemoryCache()
})