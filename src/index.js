import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Login from './Login'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

// // Create an http link:
// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/'
// })

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/`,
//   options: { reconnect: true }
// })

// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     )
//   },
//   wsLink,
//   httpLink
// )

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache().restore({})
// })

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const wrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)


ReactDOM.render(wrappedApp, document.getElementById('root'))

