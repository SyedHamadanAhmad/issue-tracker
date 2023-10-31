import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai';


const Navbar = () => {
  return (
    <nav className='bg-slate-700 flex py-4 px-9 justify-between' >
        <div>
            <Link href={'/'}><AiFillBug style={{color:'white', fontSize:30}}/></Link>
          
        </div>
        <div>
           
            <Link className="text-white my-2"href={'/create'}>Create issue</Link>
        </div>
    </nav>
  )
}

export default Navbar