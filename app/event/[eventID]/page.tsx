import React from 'react'
import event from '@/src/core/data/eventIDMap.json' 
import Image from 'next/image'

{/* <main className='h-[100vh] bg-grad py-8'>
  <section className='w-full max-w-[550px] mx-auto text-center'>
<h1 className='text-5xl font-bold my-4'>{data.name}</h1>
<p>{data.welcome_message}</p>
<section className='bg-black w-full rounded-xl shadow-hd py-6 mt-20 sm:mt-40'>
  <button className='block bg-[var(--wallet-blue)] text-white my-4 max-w-[250px] mx-auto py-2 rounded-lg w-full'>Connect wallet</button>
  <p className='underline text-center text-grad py-4 cursor-pointer'>Can&apos;t connect wallet?</p>
</section>
</section>
</main> */}
const page = ({params}:{params:{eventID:string}}) => {
  const {eventID} = params
  // const data = event[eventID] 
  // console.log({eventID,data})
  
  // if(!data)return <></>
  return ( 

<main>
<header className='fixed w-full bg-black'>
    <section className='flex justify-between'>
      <Image src="" alt='' />
      <p>{"address"}</p>
    </section>
    <section className='flex justify-between'>
      <select name="" id="">
        <option value="1">
          1
        </option>
      </select>
      <input type="text" placeholder='search speaker' />
    </section>
    </header>
</main>


    )
}

export default page