import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_CLIENTS = gql`
    query getclients {
            clients {
                id,
                name,
                email,
                phone
            }
    }
`

const Clients = () => {

    const {loading, error, data} = useQuery(GET_CLIENTS)
    if(loading){
        return <h1>Loading ...</h1>
    }
    if(error){
        return <h1>Something went wrong</h1>
    }
  return (
    <div>
      {!loading && !error && data && (
        <div>
            {data.clients.map((client, index) =>{
               return (<div key={index}>
                <p>{client.name}</p>
                <p>{client.id}</p>
                <p>{client.email}</p>
                <p>{client.phone}</p>
                </div>)
            })}
        </div>
      ) }
    </div>
  )
}

export default Clients
