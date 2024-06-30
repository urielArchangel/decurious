import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <>
   <main className='bg-grad h-[100vh] flex items-center justify-center'>
    <section className='bg-black w-full max-w-[430px] items-center flex flex-col px-4 py-24 rounded-2xl shadow-hd' >
    <form action="" className='items-center flex flex-col  space-y-8'>
    <input type="text" className='h-16 outline-none block text-center rounded-full px-6 border-2 bg-transparent border-[#f2d204] text-white text-xl'/>
    <input type="password" className='h-16 outline-none block text-center rounded-full px-6 border-2 bg-transparent border-[#f2d204] text-white text-xl'/>
    <input type="submit" value="Sign up / Sign in" className='text-black bg-grad rounded-lg h-14 w-full cursor-pointer text-xl max-w-[250px] mx-auto block ' />
</form>
<Link href="" className='underline text-xl my-4 text-grad block '>Forgot Password?</Link>
<button  className='bg-[var(--wallet-blue)] text-white rounded-lg h-14 w-full cursor-pointer text-xl max-w-[250px] mx-auto block '> Sign in with wallet</button>

</section>
   </main>
   </>
  )
}

export default page