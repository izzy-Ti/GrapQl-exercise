import React from 'react'
import { useQuery } from '@apollo/client'
import { GetProjectData } from '@/interfaces'
import { GET_PROJECTS } from '@/graphql/queries'
import ProjectCard from '@/components/Project/ProjectCard'
import Link from 'next/link'

const projects = () => {

  const { loading, error, data } = useQuery<GetProjectData>(GET_PROJECTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
      <section className="min-h-screen w-full bg-[#F1E8B8] py-8 px-4 sm:px-12 md:px-16">
    {/* Projects Grid Container */}
        <div className="w-full grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data?.projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              name={project.name}
              description={project.description}
              status={project.status}
              client={project.client}
              id={project.id}
            />
          ))}
        </div>
        <Link href="/projects/addProject" className="block mt-6 text-center text-black underline">
          <button className='text-[#F1E8B8] w-fit bg-[#a40e4c] rounded-full px-3 py-1 shadow-lg transition-transform duratio hover:bg-[#aa5679] hover:scale-105'>
            Add Project
          </button>
        </Link>
  </section>

  )
}

export default projects