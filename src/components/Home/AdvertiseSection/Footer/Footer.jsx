import React from 'react';
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  

    const links = [
        ["About", "Careers", "Press"],
        ["Advertise", "Help", "Blog"],
        ["Reddit App", "Reddit Gold", "Reddit Hits"],
      ];
  
  
    return (
    <div className=' absolute bottom-5'>
     <div className="py-3 border-2 border-l-0 border-r-0 border-slate-300 font-semibold text-slate-500 ">
      <div className="mx-auto grid grid-cols-3 text-[0.7rem] ">
        {links.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col space-y-1">
            {column.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className=" flex items-center"
              >
                <span className='px-1 py-1 text-[1rem]'>&bull;</span>
                <span>{link}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
     
    </div>

    <div className="mt-4 text-center flex justify-between text-[0.75rem] font-semibold text-slate-500">
        <div className='flex items-center'>
        <FaCopyright className='text-slate-400' />
        <p className='px-1'> 2020 </p> 
        </div>
        
        <div className='flex items-center'>
        <a href="#" className="hover:underline px-1">Privacy</a>
        <a href="#" className="hover:underline px-1">Terms</a>
        </div>
    </div>
    </div>
  )
}

export default Footer