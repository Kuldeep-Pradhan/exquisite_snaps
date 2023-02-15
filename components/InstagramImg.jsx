import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative '>
      <Image src={socialImg} className='w-full h-full' alt='social image'/>
      <div className=' flex justify-center items-center absolute hover:bg-black/50 top-0 left-0 right-0 bottom-0 group'>
      <p className='text-gray-300 hidden group-hover:block'>
        <FaInstagram size={30}/>
      </p>
      </div>
    </div>
  )
}

export default InstagramImg
