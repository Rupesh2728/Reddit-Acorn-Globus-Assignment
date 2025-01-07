import React from 'react'
import Footer from './Footer/Footer'
import logo from '../../../assets/logo.png'

const Advertise = () => {
  return (
    <div className='w-[20%] mt-[1rem] px-5'>
       
       
       <img src="https://img.freepik.com/premium-vector/summer-sale-colorful-text-hanging-isolated-white-background-with-huge-discount-summer_572288-313.jpg"
       className='rounded-md w-[18rem] h-[13rem]'/>

       <div className=' bg-white mt-3 rounded-md'>

        <div className='flex justify-center pt-[2rem]'>
        <img src={logo} className='h-[2.25rem]'/>
        </div>

        <div className='flex justify-center mt-[0.75rem]'>
          <p className='text-[0.85rem] font-semibold'>Advertise on Reddit</p>
        </div>

        <div className='flex justify-center py-4'>
        <button className=' uppercase border-2 border-orange-500 w-[85%] rounded-md p-2 text-[0.75rem] font-semibold text-orange-500'>
            Get Started
        </button>
        </div>

       </div>

       <Footer/>
       </div>
  )
}

export default Advertise