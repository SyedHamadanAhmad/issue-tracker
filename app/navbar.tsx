'use client'
import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar =  () => {
  
  const {status, data:session}=useSession()
  return (
    <nav className='bg-slate-700 flex py-4 px-9 justify-between items-center' >
      <div>
      <Link className="text-white"href={'/create'}>Create issue</Link>
      </div>
        <div>
            <Link href={'/'}><div className='flex'><span className="text-white mx-2">Issue Tracker</span><AiFillBug style={{color:'white', fontSize:30}}/></div></Link>
        </div>
        <div className='flex'>
           
          
            { status==='loading'&& <span className='text-white mx-2'>Loading...</span>}
            { status==='authenticated'&& <div className= 'flex'>
             <div className='flex justify-between items-center'><Link href={`/profile/${session.user!.name}`}><img className='cursor-pointer w-10 h-10 rounded-full mx-3' src={session.user!.image!} alt="profile"/></Link></div>
             <span className='text-white mx-2 mt-2 cursor-pointer' onClick={()=>{signOut()}}>Sign Out</span> 
              </div>}
           { status==='unauthenticated'&& <span className='cursor-pointer text-white mx-2' onClick={()=>signIn("google")}>Sign In</span>}
            
        </div>
    </nav>
  )
}

export default Navbar