import { Container } from '@mui/material' 
import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
interface Props{
    params:{
        name:string
    }
}

const Profile = async ({params}:{params:{name:string}}) => {
    const name=params.name.split('%20').join(' ')
    const session=await getServerSession(authOptions)
    if(!session){
        redirect('/')
    }


    
    
  return (
   <Container>
    <div className='flex'>
    <img className="h-20" src={session!.user!.image!} alt="profile"/>
    <div>
    <h1 className='font-bold text-2xl mx-4 my-2'>{name}</h1>
    <h2 className='mx-4 my-2'>{session!.user!.email}</h2>
    </div>
   
    </div>
   
       

   </Container>
  )
}

export default Profile