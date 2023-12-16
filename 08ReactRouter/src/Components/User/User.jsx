import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams() ;   

  return (
    <div className='bg-gray-400 text-white py-7 font-semibold text-3xl h-96' >User: {userid}</div>
  )
}

export default User