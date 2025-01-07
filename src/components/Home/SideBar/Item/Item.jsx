import React from 'react'

const Item = ({name, count, src}) => {
  return (
    <div className='flex justify-between py-[0.4rem] items-center'>
        <div className='flex'>
            <img src={src} className='w-[1.35rem] h-[1.35rem]  rounded-full object-cover'/>
            <p className='text-[0.7rem] pl-3 font-semibold text-slate-500'>{name}</p>
        </div>

        {count !==0 && 
        <div className='bg-slate-300 p-1 text-[0.65rem] font-[500] rounded-md w-[1.75rem] flex justify-center'>
           <p>
           {count}
           </p>
        </div>}
    </div>
  )
}

export default Item