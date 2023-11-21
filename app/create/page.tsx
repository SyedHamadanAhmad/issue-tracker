'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const CreateIssue = () => {
  const [title, setTitle]=useState("")
  const [description, setDescription] =useState("")
  
  const {status, data:session}=useSession()

    useEffect(()=>{
      
      if(!session){redirect('/api/auth/signin')}
    },[])
  
  
  const router=useRouter()

  const handleSubmit=async (e:FormEvent)=>{
    e.preventDefault();
    
    if(!title || !description){
      alert("Title and Description are required!")
     
    }
    try {
      const res=await fetch("http://localhost:3000/api/Issues", {
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({title, description})
      })

      if(res.ok){
        router.push('/');
       router.refresh()}
      else{throw new Error("Failed to create issue")}

    } catch (error) {
      console.log(error)
    }

  }

  return (
   <Container className='flow-root'>
    <h1 className='font-bold text-2xl mb-3'>Create Issue</h1>

     <form onSubmit={handleSubmit}>
      <input 
      className='border border-slate-700 px-2 py-2 w-42 mb-4'
      type='text'
      placeholder='Title'
      onChange={(e)=>setTitle(e.target.value)}
      />
      <br/>
      <input 
      className='h-24 w-96 border border-slate-700 px-2 py-2 w-42'
      type='text'
      placeholder='Description'
      onChange={(e)=>setDescription(e.target.value)}
      />
       <br/>
      <button className='bg-green-500 px-4 py-2 rounded-md my-4 text-white hover:bg-green-600'>Submit</button>
    </form>


    

   </Container>
  )
}

export default CreateIssue