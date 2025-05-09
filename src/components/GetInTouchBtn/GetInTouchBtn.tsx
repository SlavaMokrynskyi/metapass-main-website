'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import './GetInTouchBtn.css'

const GetInTouchBtn = () => {
    const router = useRouter()

    const handlerOnClick = () =>{
        router.push('/events')
    }
  
    return (
    <>
      <button className='btn' onClick={handlerOnClick}>Get In Touch</button>
    </>
  )
}

export default GetInTouchBtn