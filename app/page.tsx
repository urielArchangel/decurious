import EventItem from '@/src/fe/EventItem'
import React from 'react'
import { BiPlus, BiPlusCircle } from 'react-icons/bi'
import event from '@/src/core/data/event.json'
import Link from 'next/link'
function page() {
  return (
    <>
     <main>
      <div className='m-4 flex items-center cursor-pointer w-fit'>
        <BiPlusCircle className='text-[#f2d204] font-extrabold text-2xl mx-1' />
      <h1 className=' text-xl text-grad  ' >Add an event</h1>
      </div>
      <section >
        {event.map((e,i)=>(
          <Link href="" className='shadow-hd max-w-[650px]  rounded-lg mx-auto block' key={i}>
          <EventItem e={e} />
          </Link>
        ))}
      </section>
     </main>
    </>
  )
}

export default page