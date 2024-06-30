import React from 'react'
import event from '@/src/core/data/event.json'
import { ModelType } from '@/decarations'
import Image from 'next/image'

interface EventModel{
    e:ModelType
}
 


const EventItem:React.FC<EventModel>=({e}) =>{
  return (
   <article className='flex ' >
    <div className=' rounded-tl-lg rounded-bl-lg flex-[2]  '>
        <Image className='w-full h-full rounded-tl-lg rounded-bl-lg' src={e.image} alt={e.name} width="720" height="720" />
    </div>
    <div className='flex-[4] h-full pr-10 pl-4 flex flex-col justify-center space-y-2 py-8'>
        <div> 
            <p className='event-details-labels'>Name</p>
            <h1 className='text-2xl '>{e.name}</h1>
        </div>
        <section className='flex justify-between'>
        <div>
            <p className='event-details-labels'>Event span</p>
            <h2 className='text-lg'>{e.event_span}</h2>
        </div>
        <div>
            <p className='event-details-labels'>Event start date</p>
            <h2 className='text-lg'>{new Date(e.start_date).toLocaleString().split(',')[0]}</h2>
        </div>
        </section>
        <section>
        <div>
            <p className='event-details-labels'>Event start time</p>
            <h2>{e.start_time}</h2>
        </div>
        </section>
        <section className='flex items-end justify-between'>
        <div >
            <p className='event-details-labels'>Progress</p>
            <div className='flex items-center space-x-1'>
            <div className='bg-green-400 w-4 h-4 rounded-full'></div>
            <h2>{e.setup_status}</h2>
            </div>
        </div>
         <div>
            <p className='event-details-labels'>Event status</p>
            <div className='flex items-center space-x-1'>
            <div className='bg-gray-400 w-4 h-4 rounded-full'></div>
            <h2>{e.event_status}</h2>
            </div>
        </div>
        <section className='space-y-2'>
            <button className='block bg-grad py-2 px-4 border border-transparent rounded-lg'>Get QR code</button>
            <button className='block text-grad border border-[var(--de-color)] w-full py-2 rounded-lg'>Copy link</button>
        </section>
        </section>
    </div>
   </article>
  )
}

export default EventItem