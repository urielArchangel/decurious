import React from 'react'
import Image from 'next/image'
import AttendPage from './attend'



const page = ({params}:{params:{eventID:string}}) => {
  const {eventID} = params
  // const data = event[eventID] 
  // console.log({eventID,data})
  
  // if(!data)return <></>
  return ( 


<main className='h-[100vh] bg-grad py-8'>
<AttendPage eventID={eventID} />
</main>


    )
}

export default page