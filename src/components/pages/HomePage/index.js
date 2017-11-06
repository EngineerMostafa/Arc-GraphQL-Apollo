// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({ uri: 'https://q80vw8qjp.lp.gql.zone/graphql' }),
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      {
        hello
      }
    `,
  })
  .then(console.log)

const HomePage = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello World</div>
    </ApolloProvider>
  )
}

export default HomePage
