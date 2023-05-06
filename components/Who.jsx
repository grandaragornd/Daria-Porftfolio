import React from 'react'
import Image from 'next/image'
import whopic from '../public/images/whopic.jpeg'
const Who = () => {
  return (
    <>
    <div className='inline-block grid justify-center'>
        <div className='px-[50px] justify-center p-[30px]'>
            <h2 className='headertext text-6xl'>Who is daria?</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-end p-[30px]'>
            <div className='pb-[50px]'>
                <h2 className='text-xl p-[20px]'>Zwei Personen stecken in einem Künstler - der Poet und der Handwerker. </h2>
            </div>
            <div className='h-full w-full'>
                <Image
                src={whopic}
                className='rounded-full'
                height='500' width='500'
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default Who