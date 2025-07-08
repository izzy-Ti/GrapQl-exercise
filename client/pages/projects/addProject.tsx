import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_PROJECT } from '@/graphql/mutations'
import { useRouter } from 'next/router'

const addProject = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [clientid, setClientid] = useState("")
    const [description, setDescription] = useState("")
    const [AddProject, {data, loading, error}] = useMutation(ADD_PROJECT)

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault()
            await AddProject({
                variables: {
                    name,
                    description,
                    clientid
                }
            })
            router.push('/projects/')
        }
        catch (err) {
            console.error("GraphQL Error:", JSON.stringify(err, null, 2));
            alert(err)
        }
    }

  return (
    <section className='min-h-screen w-full bg-[#f1e8b8] pt-4'>
        <form onSubmit={handleSubmit} className=' bg-[#a40e4c] h-72 w-fit flex flex-col text-[#f1e8b8] p-8 rounded-2xl gap-y-8 mx-auto'>

            {/* name */}
            <div className='flex justify-between gap-x-2'>

                <label htmlFor='name'>Project Name: </label>
                <input type='text' id='name' value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}  className='border border-[#f1e8b8] rounded-md outline-none p-1'/>
            </div>

            {/* description */}
            <div className='flex justify-between gap-x-2'>
                <label htmlFor='desc'>Description: </label>
                <textarea id='desc' value={description} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} className='resize-none border border-[#f1e8b8] rounded-md flex-2 outline-none p-1'/>
            </div>

            {/* client id */}
            <div className='flex justify-between gap-x-2'>

                <label htmlFor='clientid'>Client ID: </label>
                <input type='text' value={clientid} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setClientid(e.target.value)} className='border border-[#f1e8b8] rounded-md flex-2 outline-none p-1' />
            </div>
            <button className='bg-[#F1E8B8] w-fit text-[#a40e4c] rounded-full px-3 py-1 shadow-lg transition-transform duration-300 hover:bg-[#ebdf9e] hover:scale-105' type='submit'>
                { loading ? "Submitting..." : "Submit"}
            </button>

        </form>
    </section>
  )
}

export default addProject;