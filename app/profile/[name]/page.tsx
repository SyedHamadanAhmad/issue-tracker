import { Container } from '@mui/material' 
import React from 'react'
import NameCard from './namecard'
import GetData from './getdata' 
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


interface Props{
    params:{
        name:string
        img:string,
        email:string
    }
}





const Profile = async ({params}:{params:{name:string}}) => {
    const name=params.name.split('%20').join(' ')
    const session=await getServerSession(authOptions)
    if(!session){redirect('/')}
    const img=  session && session!.user!.image
    const email= session && session!.user!.email
  
    
    

    
   
  return (
    
   <Container>
    
   <NameCard name={name} img={img!} email={email!}/>
   <h1 className='font-bold text-2xl my-6'>Recently accessed issues:</h1>
   <GetData/>
       

   </Container>
  )
}

export default Profile