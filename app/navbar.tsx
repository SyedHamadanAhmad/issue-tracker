'use client'
import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai';
import { useSession } from 'next-auth/react';


const Navbar =  () => {
  const {status, data:session}=useSession()
  return (
    <nav className='bg-slate-700 flex py-4 px-9 justify-between' >
        <div>
            <Link href={'/'}><AiFillBug style={{color:'white', fontSize:30}}/></Link>
        </div>
        <div className='flex'>
           
            <Link className="text-white my-2"href={'/create'}>Create issue</Link>
            { status==='loading'&& <span className='text-white my-2 mx-2'>Loading...</span>}
            { status==='authenticated'&& <div className='text-xs flex'>
              <img className='w-10 h-10 rounded-full mx-3' src={session.user!.image!} alt="profile"/>
              </div>}
           { status==='unauthenticated'&& <Link className='text-white my-2 mx-2' href={'/api/auth/signin'}>Sign In</Link>}
            
        </div>
    </nav>
  )
}

export default Navbar