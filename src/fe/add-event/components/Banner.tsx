import React from 'react'

const Banner = () => {
  return (
    <div>
    <label
      htmlFor="eventBanner"
      className="relative w-[200px] h-[200px] cursor-pointer rounded-lg flex items-center justify-center border-4 text-gray-200 border-gray-200 border-dashed"
    >
      <p className="">Add event banner</p>
    </label>
    {/* <Image /> */}
    <input type="file" name="" id="eventBanner" hidden />
  </div>  )
}

export default Banner