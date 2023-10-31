import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'

const RemoveBtn = () => {
  return (
    <button className='mt-4 mb-2'><TiDeleteOutline size={24} style={{color:"red"}}/></button>
  )
}

export default RemoveBtn