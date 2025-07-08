import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CLIENTS } from '@/graphql/queries'
import { GetClientData } from '@/interfaces'
import ClientsCard from '@/components/Clients/ClientsCard'
import Link from 'next/link'

const clients = () => {

  const {data, error, loading} = useQuery<GetClientData>(GET_CLIENTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <section className="min-h-screen w-full bg-[#F1E8B8] py-8 px-4 sm:px-12 md:px-16">
      <div className="w-full grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
          data?.clients.map((client) => (
            <ClientsCard key={client.id}
            id={client.id}
            name={client.name}
            email={client.email}
            phone={client.phone} />
          ))
        }
      </div>
      <Link href="/projects/addProject" className="block mt-6 text-center text-black underline">
                <button className='text-[#F1E8B8] w-fit bg-[#a40e4c] rounded-full px-3 py-1 shadow-lg transition-transform duratio hover:bg-[#aa5679] hover:scale-105'>
                  Add Project
                </button>
        </Link>
    </section>
  )
}

export default clients