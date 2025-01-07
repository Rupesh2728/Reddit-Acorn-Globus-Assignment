import React from 'react'

const Item = ({name, count, src}) => {
  return (
    <div className='flex justify-between'>
        <div className='flex'>
            <img src={src} className='w-[2rem] h-[2rem] rounded-full object-cover'/>
            <p>{name}</p>
        </div>

        <div className='bg-slate-500'>
            {count}
        </div>
    </div>
  )
}

export default Item