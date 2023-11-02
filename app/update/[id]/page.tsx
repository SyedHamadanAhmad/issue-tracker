import React from 'react'
import EditForm from '@/app/editForm'


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


const EditIssue = async ({params}) => {


  const {id}=params
  
  

  return (
   

   <EditForm id={id}/>
  )
}

export default EditIssue