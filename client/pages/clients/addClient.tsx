import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT } from '@/graphql/mutations'
import { useRouter } from 'next/router'

const addClient = () => {

  const router = useRouter()
  const [AddClient, {data, loading, error}] = useMutation(ADD_CLIENT)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      await AddClient({
        variables: {
          name,
          phone,
          email
        }
      })
      router.push('/clients/')
    } catch(err) {
      console.error("GraphQL Error:", JSON.stringify(err, null, 2));
      alert(err)
    }
  }
  return (
    <section className='min-h-screen w-full bg-[#f1e8b8] pt-4'>
      <form onSubmit={handleSubmit} className=' bg-[#a40e4c] h-72 w-fit flex flex-col text-[#f1e8b8] p-8 rounded-2xl gap-y-8 mx-auto'>
      
                  {/* name */}
                  <div className='flex justify-between gap-x-2'>
      
                      <label htmlFor='name'>Name: </label>
                      <input type='text' id='name' value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}  className='border border-[#f1e8b8] rounded-md outline-none p-1'/>
                  </div>
                  {/* Phone */}
                  <div className='flex justify-between gap-x-2'>
      
                      <label htmlFor='phone'>Phone: </label>
                      <input type='text' id='phone' value={phone} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}  className='border border-[#f1e8b8] rounded-md outline-none p-1'/>
                  </div>
                  {/* Email */}
                  <div className='flex justify-between gap-x-2'>
      
                      <label htmlFor='email'>Email: </label>
                      <input type='text' id='email' value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}  className='border border-[#f1e8b8] rounded-md outline-none p-1'/>
                  </div>
                  <button className='bg-[#F1E8B8] w-fit text-[#a40e4c] rounded-full mx-auto px-3 py-1 shadow-lg transition-transform duration-300 hover:bg-[#ebdf9e] hover:scale-105' type='submit'>
                      { loading ? "Submitting..." : "Submit"}
                  </button>
      
              </form>
    </section>
  )
}

export default addClient