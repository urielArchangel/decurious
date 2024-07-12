import React, { SetStateAction } from 'react'
import { inputBoxStyle } from '../../utils/styling/TailwindTemplate'
import { MdCancel } from 'react-icons/md'

const CreateSpeaker = ({setSpeakerAdding}:{setSpeakerAdding:React.Dispatch<SetStateAction<boolean>>}) => {

  return (
    <section className='relative py-12' >
      <MdCancel size={27} className='absolute top-0 right-4 cursor-pointer' onClick={()=>{
         setSpeakerAdding(false)
      }} />
    <section className='flex justify-between'>
    <div className='pr-2 space-y-4'>
        <div >
   <label htmlFor="">Speaker&apos;s name</label>
   <input type="text" className={inputBoxStyle} />
   </div>
   <div>
   <label htmlFor="">Speaker&apos;s title</label>
   <input type="text" className={inputBoxStyle}  />
   <small>example,&quot; The ceo of rimo swap &quot;</small>
   </div>
   </div>
   <div>
<label htmlFor="eventBanner" className='relative w-[200px] h-[200px] cursor-pointer rounded-lg flex items-center justify-center border-4 text-gray-200 border-gray-200 border-dashed'>
    <p className=''>Add speaker&apos;s picture</p>
    </label>
    {/* <Image /> */}
<input type="file" name="" id="eventBanner" hidden />
</div> 
   </section>
   <div className='my-6'>
    <h5>Speaker&apos;s socals</h5>
    <div className='space-y-2 my-2'>
   <input type="text" className={inputBoxStyle} placeholder='Twitter url' />
   <input type="text" className={inputBoxStyle} placeholder='linkedin url' />
   <input type="text" className={inputBoxStyle} placeholder='' />
   </div>
   </div>
   <div className='my-4'>
      <label htmlFor="">Additional description</label>
   <textarea className='block w-full h-[200px] outline-0' ></textarea>
   </div>
   <section className='text-right py-2'>
        <button className='bg-grad px-6 py-3 rounded-lg'>add speaker</button>
    </section> 
</section>  )
}

export default CreateSpeaker