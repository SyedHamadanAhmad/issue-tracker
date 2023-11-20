import React from 'react'
import Link from 'next/link'
import { Container } from '@mui/material'
import RemoveBtn from './removebtn'
import {AiTwotoneEdit} from 'react-icons/ai'

interface issue{
  _id:string,
  title:string,
  description:string,
  status:string,
  name:string
}
export const getIssues = async()=>{
  try {
    const res = await fetch('http://localhost:3000/api/Issues', {
      cache:"no-store",
    })
    if(!res.ok){
      throw new Error('Failed to get Issues')
    } 
    
    return res.json()

  } catch (error) {
    console.log("Error loading topics: ", error)
  }

}

const Issue = async () => {
  const { issues }=await getIssues();
  return(
    <Container>
     {issues.map((issue:issue)=>{
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

export default Issue