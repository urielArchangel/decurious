import React, { SetStateAction } from 'react'

const AddSpeaker = ({setSpeakerAdding}:{setSpeakerAdding:React.Dispatch<SetStateAction<boolean>>}) => {
  return (
    <section className='flex cursor-pointer items-center justify-center rounded-lg w-full border-2 border-dashed bprder-[var(--subtext)] h-[70px]' onClick={()=>{
      setSpeakerAdding(true)
    }}>
    <p className='text-[var(--subtext)]'>Add a speaker</p>
</section>  )
}

export default AddSpeaker