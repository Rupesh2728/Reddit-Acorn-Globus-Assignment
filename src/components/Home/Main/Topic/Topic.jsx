import React from 'react'

const Topic = ({topic,handleOnClick}) => {
  
  
    return (
     <>
       {topic.click ? 
       <div className='bg-slate-200 px-3 py-2 text-[0.85rem] font-[500] rounded-md flex justify-center mx-3' >
        <p className='font-semibold' onClick={()=>handleOnClick(topic)}>
           {topic.title}
        </p>
       </div> 
       
       : 

       <div className='px-3 py-2 text-[0.85rem] font-[500] rounded-md flex justify-center mx-3 ' >
        <p onClick={()=>handleOnClick(topic)}>
           {topic.title}
        </p>
       </div>
       }
     </>
        
  )
}

export default Topic