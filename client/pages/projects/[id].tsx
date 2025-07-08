import { GET_PROJECTS } from '@/graphql/queries'
import { GetProjectData } from '@/interfaces'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

const Details: React.FC= () => {
  
  const router = useRouter()
  const {id} = router.query 
  const {data, error, loading } = useQuery<GetProjectData>(GET_PROJECTS)

  const project = data?.projects.find((project) => project.client.id.toString() === id?.toString())

  console.log("Project:", project)
  return (
    <section>
        
    </section>
  )
}

export default Details