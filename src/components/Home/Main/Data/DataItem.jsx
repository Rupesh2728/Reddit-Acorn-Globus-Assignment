import React from 'react';
import { FiMessageSquare } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const DataItem = ({data}) => {

    const handleClick = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

  return (
    <div className='border-2 border-slate-200 rounded-md flex mt-[0.5rem] mb-[1.5rem]' onClick={()=>handleClick(data.url)}>
        <div className='flex p-3'>
          <div className='m-auto'>
          {data.imgurl && data.imgurl!=="self" && <img src={data.imgurl} className='object-cover w-[6rem] h-[6rem] rounded-md'/>}
          {(data.imgurl===null || data.imgurl==="self")  && <img src="https://st4.depositphotos.com/20523700/25950/i/450/depositphotos_259506188-stock-photo-illustration-picture-icon.jpg" className='object-cover w-[5.5rem] h-[5.5rem] rounded-md'/>}
          </div>

          <div className='mx-[1.5rem] w-[27rem] flex-col justify-between'>

            <p className='text-[0.85rem] font-semibold pl-1'>
                {data.title}
            </p>

            <div className='flex justify-between mt-[1.5rem]'>
                <div className='flex text-[0.75rem] justify-evenly pl-1 '>
                    <p className='text-slate-600 mr-2'>
                        Posted by
                    </p>

                    <img src={data.authorimg} className='w-[1rem] h-[1rem]  rounded-full object-cover'/>

                    <p className='font-semibold ml-2'>
                      {data.author}
                    </p>

                </div>

                <p className='text-[0.7rem] font-semibold text-slate-300'>
                    {data.postedAt}
                </p>

            </div>

          </div>

          <div className='ml-[3rem]'>

            <div className='flex justify-between items-center w-[8rem]'>     
                <FiMessageSquare/>    
                <p className='text-[0.9rem] font-semibold text-slate-500 '>
                    {data.num_comments}
                </p>

                <p className='text-[0.8rem] text-slate-600'>
                    Comments
                </p>
            </div>

            <div className='flex justify-between items-center w-[6rem] mt-[0.75rem]'>
                <GoShareAndroid/>
                
                <p className='text-[0.9rem] font-semibold text-slate-500 '>
                    {data.num_shares}
                </p>

                <p className='text-[0.8rem] text-slate-600'>
                    Share
                </p>
            </div>

            <div className='flex justify-between items-center w-[3.5rem] mt-[0.75rem]'>
                <IoIosMore/>

                <p className='text-[0.8rem] text-slate-600 '>
                    More
                </p>
            </div>

          </div> 

        </div>

        <div className='border-2 border-t-0 border-r-0 border-b-0 px-4 py-3 ml-[3rem]'>

           <button className=' bg-orange-100 p-1 text-[0.65rem] font-[500] rounded-sm w-[2.5rem] flex justify-center my-1'>
               <p>
                <FaChevronUp className='text-[0.9rem] text-orange-500'/>
              </p>
            </button>

            <div className='flex justify-center py-1'>
            <p className='text-[0.9rem] font-semibold'>
                {data.score}
            </p>
            </div>

            <button className='bg-orange-100 p-1 text-[0.65rem] font-[500] rounded-sm w-[2.5rem] flex justify-center my-1'>
               <p>
               <FaChevronDown className='text-[0.9rem] text-orange-500'/>
              </p>
            </button>
        </div>

    </div>
  )
}

export default DataItem