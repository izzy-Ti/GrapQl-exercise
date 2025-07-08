import { GET_PROJECTS } from '@/graphql/queries'
import { GetProjectData } from '@/interfaces'
import { useQuery } from '@apollo/client'
import Button from '@/components/common/Button'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const index = () => {
  const router = useRouter()

  return (
    <div className='min-h-screen w-full bg-[#a40e4c] flex justify-center items-center'>
      <div className='flex gap-x-6'>
        <Link href="/projects"><Button label="Projects" /></Link>
        <Link href="/clients"><Button label="Clients" /></Link>
        
      </div>
    </div>
  )
}

export default index