// eslint-disable-next-line no-unused-vars
import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed h-screen w-full z-[2]'>
        <div className='absolute top-[5%] w-full flex justify-center py-10 text-2xl font-semibold text-zinc-600'>Documents</div>
        <div className='absolute top-[48%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs</div>

    </div>
    </>
  )
}

export default Background