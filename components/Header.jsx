import React from 'react'
import Image from 'next/image'
import dariaheader from '../public/images/dariaheader.jpeg'
import {BsArrowReturnRight} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='inline-block pt-[150px] grid justify-center'>
        <div className='p-[30px] grid grid-cols-1 sm:grid-cols-2 items-center gap-[40px]'>
          <div className='text-6xl'>
            <h2 className='headertext'>Welcome to</h2>
            <h2 className='headertext'>My Make-Up</h2>
            <h2 className='headertext'>Portfolio</h2>
            <div className='pt-[30px]'>
            <h2 className='text-xl'>Daria Paach / Angehende Make-up Artistin</h2>
            <div>
              <span className='text-2xl button'>Contact me</span>
            </div>
          </div>
          </div>
          <div className='h-full w-full'>
            <Image src={dariaheader} className='rounded-xl' height='500' width='500'/>
            <div className='flex items-center justify-center w-full pt-[30px]'>
              <BsArrowReturnRight size={30}/>
              <p className='px-[10px] button text-xl'>Work with me today</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header