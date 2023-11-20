import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { Container } from '@mui/material'
import RemoveBtn from '@/app/removebtn'
import {AiTwotoneEdit} from 'react-icons/ai'
import Link from 'next/link'

interface Issue{
  _id:string,
  title:string,
  description:string,
  name:string,
  email:string,
  status:string
}

interface Issue extends Array<Issue>{}


const GetData = async ({}) => {

 async function getdata(){
    try {
      const session=await getServerSession(authOptions)
      const res=await fetch(`http:localhost:3000/api/profile/${session!.user!.email}`)
      return res.json()
    } catch (error) {
      
    }
    
  }
  const {issues}:{issues:Issue[]}=await getdata()
  return(
    <Container>
     {issues.map((issue:Issue)=>{
      return(
        <div key={issue._id} className='flex justify-between border border-slate-700 my-4 p-3 items-start'>
           <div>
            <div className='flex'>
            <h1 className='font-bold text-xl'>{issue.title}</h1>
            <h2 className='mx-5 font-extralight'>Last updated by: {issue.name}</h2>
            </div>
           

             
             <p className='mt-3 mx-2 '>{issue.description}</p>
            
            <h2 className="mt-3 mx-2 font-bold"><span className={issue.status==="CLOSED"?"text-green-600":issue.status==="ONGOING"?"text-slate-600":"text-red-600"}>{issue.status}</span></h2>
          
            
            

            
             </div>
             
             <div>
   
            
            <RemoveBtn id={issue._id}/>
            <Link href={`/update/${issue._id}`}><AiTwotoneEdit size={24}/></Link>
            </div>

        </div>
      )
     })}
    </Container>
  ) 
   
   
  

}

export default GetData