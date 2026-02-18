import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center py-16 gap-4 text-gray-800' id='speciality'>
        <h1 className='text-center text-3xl font-medium'>Find by Speciality</h1>
        <p className='text-center sm:w-1/3 text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointments hassle-free.</p>

        <div className='flex sm:justify-center  items-center gap-10 text-center pt-5 w-full overflow-scroll '>
            {specialityData.map((item,index)=>(    // map loops through and returs the item name and the index number when called. they are just var names and can be names as x y also.
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer shrink-0 hover:translate-y-[-10px] transition-all duration-400' key={index} to={`/doctors/${item.speciality}`}>   {/*item.spec returns the name such as dermatolgoist. Link tag is used to link to that page on click. */}
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt=""/> 
                    <p>{item.speciality}</p>      
                </Link>
            ))}  

        </div>
    </div>
  )
}

export default SpecialityMenu