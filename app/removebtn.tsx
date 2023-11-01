'use client'
import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import { useRouter } from 'next/navigation'


type RemoveBtnProps = {
  id: String;
}

const RemoveBtn = ({id}: RemoveBtnProps) => {
  const router=useRouter()

  const removeIssue=async ()=>{
    const confirmed = confirm("Are you sure?")

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/Issues?id=${id}`,{
        method:"DELETE"
      })
      if(res.ok) router.refresh()
    }
  }
  return (
    <button onClick={removeIssue} className='mt-4 mb-4'><TiDeleteOutline size={24} style={{color:"red"}}/></button>
  )
}

export default RemoveBtn