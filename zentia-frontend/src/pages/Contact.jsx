import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center my-15 text-2xl text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[400px]' src={assets.contact_image} alt=''/>
          
          <div className='flex flex-col justify-center items-start gap-6 text-sm text-gray-500'>
            <p className='text-xl text-gray-600 font-semibold'>OUR OFFICE</p>
            <p>00000 Station <br/>Road 000, Sri Lanka</p>
            <p>Tel: (000) 000-0000 <br/> Email: zentia@gmail.com</p>
            <p className='text-xl text-gray-600 font-semibold'>CAREERS AT ZENTIA</p>
            <p>Learn more about our teams and job openings.</p>

            <button className='text-gray-800 border border-black p-5 px-9 font-medium hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>

            
      
          
        </div>
    </div>
  )
}

export default Contact