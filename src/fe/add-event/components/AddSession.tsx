'use client'
import React, { SetStateAction } from 'react'

const AddSession = ({addSession}:{addSession:React.Dispatch<SetStateAction<boolean>>}) => {
  return (
    <section className='flex cursor-pointer items-center justify-center rounded-lg w-full border-2 border-dashed bprder-[var(--subtext)] h-[70px]' onClick={()=>{
      addSession(true)
    }}>
    <p className='text-[var(--subtext)]'>Add a session</p>
</section>  )
}

export default AddSession