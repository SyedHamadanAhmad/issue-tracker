import React from 'react'

const NameCard = ({name, email, img}:{name:string, email:string, img:string}) => {
  return (
    <div className='flex'>
    <img className="h-20" src={img!} alt="profile"/>
    <div>
    <h1 className='font-bold text-2xl mx-4 my-2'>{name}</h1>
    <h2 className='mx-4 my-2'>{email}</h2>
    </div>
    
    </div>
  )
}

export default NameCard