'use client'
import React, { FormEvent, useState } from 'react'
import { Container } from '@mui/material'
import { useRouter } from 'next/navigation'

type EditFormProps = {
  id: string, 
  title: string,
  description:string
  
}

const EditForm = ({id, title, description}: EditFormProps) => {
  const router=useRouter();

  const [newTitle, setnewTitle]=useState(title)
  const [newDescription, setnewDescription]=useState(description)
  const [newStatus, setnewStatus]=useState("OPEN")
  
  const handleSubmit=async (e:FormEvent)=>{
    
    e.preventDefault();
    try {
      const res =  await fetch(`http://localhost:3000/api/Issues/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({newTitle, newDescription, newStatus})
      })
      if(!res.ok){throw new Error("Failed to Update Issue")}
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className='flow-root'>
    <h1 className='font-bold text-2xl mb-3'>Update Issue</h1>
     <form onSubmit={handleSubmit}>
      <input 
      onChange={(e)=>{setnewTitle(e.target.value)}}
      value={newTitle}
      className='border border-slate-700 px-2 py-2 w-42 mb-4'
      type='text'
      placeholder='Title'
      required={true}
      />
      <br/>
      <input 
      onChange={(e)=>{setnewDescription(e.target.value)}}
      value={newDescription}
      className='h-24 w-96 border border-slate-700 px-2 py-2 w-42'
      type='text'
      placeholder='Description'
      required={true}
      />
       <br/>
      <div className='mt-3'>
      <label>Status: </label>
       <select onChange={(e)=>setnewStatus(e.target.value)}>
       <option value="OPEN">OPEN</option>
       <option value="ONGOING">ONGOING</option>
       <option value="CLOSED">CLOSED</option>

       </select>
      </div>
       <br/>
         
      <button className='bg-green-500 px-4 py-2 rounded-md my-4 text-white hover:bg-green-600'>Update</button>
    </form>
   </Container>
  )
}

export default EditForm