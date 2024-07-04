'use client'
import React from 'react'
import event from '@/src/core/data/event.json'
import Link from 'next/link'
import EventItem from '@/src/fe/EventItem'
import { useAccount } from 'wagmi'




const EventsLists = () => {
  return (
    <section >
    {event.map((e,i)=>(
      <Link href="" className='shadow-hd max-w-[650px]  rounded-lg mx-auto block' key={i}>
      <EventItem e={e} />
      </Link>
    ))}
  </section>  )
}

export default EventsLists