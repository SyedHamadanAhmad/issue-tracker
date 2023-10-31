import React from 'react'
import { Container } from '@mui/material'

const EditForm = () => {
  return (
    <Container className='flow-root'>
    <h1 className='font-bold text-2xl mb-3'>Update Issue</h1>
     <form>
      <input 
      className='border border-slate-700 px-2 py-2 w-42 mb-4'
      type='text'
      placeholder='Title'
      />
      <br/>
      <input 
      className='h-24 w-96 border border-slate-700 px-2 py-2 w-42'
      type='text'
      placeholder='Description'
      />
       <br/>
      <div className='mt-3'>
      <label>Status: </label>
       <select>
       <option value="OPEN">OPEN</option>
       <option value="ONGOING">ONGOING</option>
       <option value="CLOSED">CLOSED</option>

       </select>
      </div>
       <br/>
         
      <button className='bg-green-500 px-4 py-2 rounded-md my-4 text-white hover:bg-green-600'>Update</button>
    </form>
   </Container>
  )
}

export default EditForm