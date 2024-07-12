'use client'
import React, { SetStateAction, useState } from 'react'
import AddSpeaker from './AddSpeaker'
import CreateSpeaker from './CreateSpeaker'
import { inputBoxStyle } from '../../utils/styling/TailwindTemplate'
import {MdCancel} from 'react-icons/md'

const CreateSession = ({setSession}:{setSession:React.Dispatch<SetStateAction<boolean>>}) => {
    const [addSpeaker,setSpeakerAdding] = useState(false)
  return (
    <section className='bg-white rounded-lg px-4 py-12 relative'>
        <MdCancel className='text-black absolute top-4 right-4 cursor-pointer ' size={28} onClick={()=>{setSession(false)}}/>
<section className='  flex items-center justify-between '>
        <div className='w-[50%] space-y-4  '>

            <div> 
            <label htmlFor="" className='event-details-labels'>Session topic</label>
            <input type="text" className={inputBoxStyle} />
            </div>
            <div>
            <label htmlFor="" className='event-details-labels'>Start time</label>
            <input type="text" className={inputBoxStyle} />
            
            <small className='block event-details-labels'>examples, &quot;1:24PM (WAT)&quot;, &quot;22:00 (PST)&quot;</small>
            </div>
            <div>

            <label htmlFor="" className='event-details-labels'>Duration in minutes</label>
            <input type="text" className={inputBoxStyle} />
            </div>
        </div>
        <div>
        <label htmlFor="eventBanner" className='relative w-[200px] h-[200px] cursor-pointer rounded-lg flex items-center justify-center border-4 text-gray-200 border-gray-200 border-dashed'>
            <p className=''>Add session banner</p>
            </label>
            {/* <Image /> */}
        <input type="file" name="" id="eventBanner" hidden />
    </div> 

 
</section> 
<section >
        <h4 className='mt-6 mb-2'>Speakers</h4>
      
        <div className='bg-gray-100/40 py-8 px-4 rounded-lg border-black border'>
           {addSpeaker? <CreateSpeaker setSpeakerAdding = {setSpeakerAdding} />:<AddSpeaker setSpeakerAdding={setSpeakerAdding}/>}
           
        
        </div>
        
    </section>
    <section className='text-right py-2'>
        <button className='bg-grad px-8 py-4 rounded-lg'>add session</button>
    </section> 
</section> )
}

export default CreateSession