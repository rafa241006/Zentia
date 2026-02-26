import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p className='mt-10 text-lg text-gray-700 font-medium'>My Appointments</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 mt-5 p-3 border-b' key={index}>
            <div>
              <img className='w-40 bg-teal-50' src={item.image} alt='' />
            </div>
            <div className='flex-1 text-sm text-gray-600'>
              <p className='font-medium text-black text-lg'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='mt-2 font-medium text-gray-700'>Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className='mt-2'><span className=' font-medium text-gray-700'>Date & Time:</span> 24th January, 2026 | 7:30 PM</p>
            </div>
            <div></div>

            <div className='flex flex-col gap-2 justify-end text-gray-500 text-sm'>
              <button className='border border-gray-200 w-50 rounded-sm text-center py-2 text-sm hover:bg-teal-300 hover:text-white transition-all duration-200 cursor-pointer'>Pay Online</button>
              <button className='border border-gray-200 w-50 rounded-sm text-center py-2 text-sm hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer '>Cancel Appointment</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments