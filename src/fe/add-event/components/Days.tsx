'use client'
import React, { useState } from 'react'
import sessions from '@/src/core/data/session.json'
import AddSession from './AddSession'
import Link from 'next/link'
import {  BiPencil, BiSolidDownArrow, BiTrash } from 'react-icons/bi'
import { CgChevronDown } from 'react-icons/cg'
import CreateSession from './CreateSession'


const Days = () => {
    const [sessionAddingInProgress,setSessionAddingInProgress]=useState(false)
  return (
    <section>
        <h3 className='text-[1.3rem]'>Day 1</h3>
        <section className='bg-gray-100/30 rounded-lg p-4 space-y-6 '>
            <h4 className='underline '>SESSIONS</h4>
{sessions.map((e,i)=>(
    <section key={i} className='h-[70px] bg-white  rounded-lg px-4 flex items-center'>
        <BiPencil  className='text-right block cursor-pointer ' size={22}  />
        <h4 className='flex-[3]  text-center'>{e.session_topic}</h4>
        <BiTrash  className='text-right block  cursor-pointer' size={22} />
    </section>
))}

{sessionAddingInProgress?<CreateSession setSession={setSessionAddingInProgress} />:<AddSession addSession={setSessionAddingInProgress}  />}
        </section>
    </section>  )
}

export default Days