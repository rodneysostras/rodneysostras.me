// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘ 

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

import { API_API_ENDPOINT_GTIHUB_TOKEN } from '@/settings'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${API_API_ENDPOINT_GTIHUB_TOKEN}`, 
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