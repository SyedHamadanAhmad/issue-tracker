import { Container } from '@mui/material' 
import React from 'react'
import NameCard from './namecard'
import GetData from './getdata' 
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

interface Props{
    params:{
        name:string
    }
}





const Profile = async ({params}:{params:{name:string}}) => {
    const name=params.name.split('%20').join(' ')
    const session=await getServerSession(authOptions)
    const img=  session && session!.user!.image
    const email= session && session!.user!.email
  

    
    

    
   
  return (
    
   <Container>
    
   <NameCard name={name} img={img} email={email}/>
   <h1 className='font-bold text-2xl my-2'>Recently accessed issues:</h1>
   <GetData/>
       

   </Container>
  )
}

export default Profile