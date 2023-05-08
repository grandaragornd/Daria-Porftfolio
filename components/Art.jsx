import React from 'react'
import Image from 'next/image'
 import a1 from '../public/images/makeup/a1.jpeg'
 import a2 from '../public/images/makeup/a2.jpeg'
 import b1 from '../public/images/makeup/b1.jpeg'
 import b2 from '../public/images/makeup/b2.jpeg'
 import c1 from '../public/images/makeup/c1.jpeg'
 import c2 from '../public/images/makeup/c2.jpeg'
 import c3 from '../public/images/makeup/c3.jpeg'
 import c4 from '../public/images/makeup/c4.jpeg'
 import c5 from '../public/images/makeup/c5.jpeg'
 import c6 from '../public/images/makeup/c6.jpeg'
 import d1 from '../public/images/makeup/d1.jpeg'


const Art = () => {
  return (
    <>
        <div className='inline-block'>
          <div className=' px-[50px]'>
            <h2 className='text-6xl headertext'>My Art</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] m-[30px]'>
            <div className='h-full'>
              <Image src={a1} className='cursor-pointer hvr-grow'/>
            </div>
            <div>
            <Image src={a2} className='cursor-pointer hvr-grow'/>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] m-[30px]'>
            <div className='h-full'>
              <Image src={b1} className='cursor-pointer hvr-grow'/>
            </div>
            <div>
            <Image src={b2} className='cursor-pointer hvr-grow'/>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-[30px] m-[30px]'>
            <div className='h-full'>
              <Image src={c1} className='cursor-pointer hvr-grow'/>
            </div>
            <div>
            <Image src={c2} className='cursor-pointer hvr-grow'/>
            </div>
            <div>
            <Image src={c3} className='cursor-pointer hvr-grow'/>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-[30px] m-[30px]'>
            <div className='h-full'>
              <Image src={c4} className='cursor-pointer hvr-grow'/>
            </div>
            <div>
            <Image src={c5} className='cursor-pointer hvr-grow'/>
            </div>
            <div>
            <Image src={c6} className='cursor-pointer hvr-grow'/>
            </div>
          </div>
          <div className='m-[30px]'>
            <Image src={d1} className='cursor-pointer hvr-grow'/>
          </div>
        </div>
    </>
  )
}

export default Art