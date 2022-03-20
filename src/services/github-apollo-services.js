import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

import { GITHUB_TOKEN } from '@/settings'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${GITHUB_TOKEN}`, 
    }
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
  });

export default apolloProvider