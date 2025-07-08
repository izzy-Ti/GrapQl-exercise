import { Client } from '@/interfaces'
import React from 'react'

const ClientsCard: React.FC<Client> = ({
    name,
    phone,
    email
}) => {
  return (
    <div className='h-54 bg-[#a40e4c] w-64 text-[#F1E8B8] p-6 flex flex-col justify-between gap-y-4 rounded-xl'>
        <div className='flex flex-col'>
            <h2>Name</h2>
            <div className='break-words  ml-4 text-sm font-bold'>{name.toUpperCase()}</div>
        </div>
        <div className='flex flex-col'>
            <h2>Email</h2>
            <div className='break-words  ml-4 text-sm font-bold'>{email}</div>
        </div>
        <div className='flex flex-col'>
            <h2>Phone</h2>
            <div className='break-words  ml-4 text-sm font-bold'>{phone}</div>
        </div>
    </div>
  )
}

export default ClientsCard
