import React from 'react'
import image1 from '../public/Instagram-image/ig-img-1.jpeg'
import image2 from '../public/Instagram-image/ig-img-2.jpeg'
import image3 from '../public/Instagram-image/ig-img-3.jpeg'
import image4 from '../public/Instagram-image/ig-img-4.jpeg'
import image5 from '../public/Instagram-image/ig-img-5.jpeg'
import image6 from '../public/Instagram-image/ig-img-6.jpeg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on instagram</p>
      <p className='pb-4'>@_exquisite_snaps</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>

      <InstagramImg socialImg={image1}/>
      <InstagramImg socialImg={image2}/>
      <InstagramImg socialImg={image3}/>
      <InstagramImg socialImg={image4}/>
      <InstagramImg socialImg={image5}/>
      <InstagramImg socialImg={image6}/>

      </div>

    </div>
  )
}

export default Instagram
