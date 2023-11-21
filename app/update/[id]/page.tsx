import React from 'react'
import EditForm from '@/app/editForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { signIn } from 'next-auth/react'
export const getIssueByID= async (id: string)=>{
  try {
    
    const res = await fetch(`http://localhost:3000/api/Issues/${id}`,{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("Failed to fetch data")
    }
    return res.json();
    
    
  } catch (error) {
    console.log(error)
  }
}


const EditIssue = async ({params}: {params: any}) => {
  
  const session=await getServerSession(authOptions)
  if(!session){redirect('/api/auth/signin')}
  const {id}=params
  
  const {issues}=await getIssueByID(id)
  const title=issues.title 
  const description=issues.description
  
  return (
   

   <EditForm id={id} title={title} description={description}/>
  )
}

export default EditIssue