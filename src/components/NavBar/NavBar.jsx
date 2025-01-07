import React from 'react';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jpg';
import { BsBrightnessHigh } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { PiChartLineUp } from "react-icons/pi";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const NavBar = () => {
  return (
    <div className='bg-white flex justify-between py-3'>
        <div className='flex items-center'>
          <BsBrightnessHigh className='text-[1.3rem] ml-[2rem] hover:text-orange-500'/>
          <img src={logo} className='h-[2.25rem] px-4'/> 
        </div>

        <div className='flex items-center m-auto'>
            <div className='flex px-4 hover:text-orange-500'>
                <HiOutlineHome className='text-[1.5rem]' />
                <p className='px-2 text-[0.95rem]'>Home</p>
            </div>

            <div className='flex px-4 hover:text-orange-500'>
                <PiChartLineUp className='text-[1.5rem]'/>
                <p className='px-2 text-[0.95rem]'>Popular</p>
            </div>

            <div className='flex px-4 hover:text-orange-500'>
                <IoStatsChartSharp className='text-[1.5rem]'/>
                <p className='px-2 text-[0.95rem]'>All</p>
            </div>

            <div className='bg-slate-100 h-[2.5rem] w-[22rem] flex px-2 rounded-lg ml-[3rem]'>
                <FaSearch className='items-center my-auto mx-2 bg-[#f1f5f9]'/>
                <input placeholder='Find community or post' className=' bg-slate-100  outline-none placeholder:text-[0.8rem]'/>
            </div>

            <div className='flex ml-[3rem] px-4'>
                <button className='bg-orange-500 text-white text-[0.8rem] font-semibold px-7 py-3 rounded-md'>
                    Create Post
                </button>
            </div>
        </div>

        <div className='flex items-center'>
            <FiMessageSquare className='mx-3 text-[1.5rem]'/>
           <div>
             <p className=' absolute right-[12rem] w-2rem h-2rem bg-orange-500 text-orange-500 text-[0.5rem] rounded-full w-3'>1</p>
             <FiMail className='mx-3 text-[1.5rem]' />
           </div>
        <div className='flex px-6'>
          <img src={profile} className='w-[2.5rem] h-[2.5rem] rounded-full object-cover'/>
          <MdOutlineKeyboardArrowDown className='items-center m-auto text-[1.5rem] ml-2'/>
        </div> 
        
        </div>

        <div>

        </div>
    </div>
  )
}

export default NavBar