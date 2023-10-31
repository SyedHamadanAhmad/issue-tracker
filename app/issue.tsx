import React from 'react'
import Link from 'next/link'
import { Container } from '@mui/material'
import RemoveBtn from './removebtn'
import {AiTwotoneEdit} from 'react-icons/ai'

const Issue = () => {
  return (
    <Container className='flex justify-between my-4 border border-slate-700 p-6'>
        <div>
         <h1 className='font-bold text-xl'>Title</h1>
        
          
          <p className='m-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

       
         
          </div>
          <div>

         
         <RemoveBtn/>
         <Link href={'/update'}><AiTwotoneEdit size={24}/></Link>
         </div>
            
    </Container>
 
  )
}

export default Issue