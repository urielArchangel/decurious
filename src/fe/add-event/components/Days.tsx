import React from 'react'
import sessions from '@/src/core/data/session.json'
import AddSession from './AddSession'
import Link from 'next/link'
import {  BiSolidDownArrow } from 'react-icons/bi'
import { CgChevronDown } from 'react-icons/cg'
import CreateSession from './CreateSession'


const Days = () => {
  return (
    <section>
        <h3 className='text-[1.3rem]'>Day 1</h3>
        <section className='bg-gray-100/30 rounded-lg p-4 space-y-6 '>
            <h4 className='underline '>SESSIONS</h4>
{sessions.map((e,i)=>(
    <Link href="" key={i} className='h-[70px] bg-white  rounded-lg  flex items-center'>
        <h4 className='flex-[3]  text-center'>{e.session_topic}</h4>
        <CgChevronDown  className='text-right block mr-3' size={22} />
    </Link>
))}
{/* <CreateSession /> */}
           <AddSession />
        </section>
    </section>  )
}

export default Days