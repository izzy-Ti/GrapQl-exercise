import { useState } from 'react'
import Header from './component/header/Header.jsx'
import Clients from './component/clients/Clients.jsx'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'



function App() {
    const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <>
      <ApolloProvider client={client}>
      <Header />
      <Clients />
      </ApolloProvider>
    </>
  )
}

export default App
