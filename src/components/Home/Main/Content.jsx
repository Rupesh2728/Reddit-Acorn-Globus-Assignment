import React, { useEffect, useState } from 'react'
import Topic from './Topic/Topic'
import DataItem from './Data/DataItem';

const Content = () => {
  
    const topics = [
        { title: 'Hot', click: true },
        { title: 'New', click: false },
        { title: 'Controversial', click: false },
        { title: 'Rising', click: false },
        { title: 'Top', click: false },
      ];

     const dataarr =[
     { 
        image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
        content : "2025 Pan-American Intercollegiate Championship happening b/w 2 big bulls",
        authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
     }, 
     { 
        image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
        content : "2025 Pan-American Intercollegiate Championship - Summary",
        authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
     },
     { 
        image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
        content : "2025 Pan-American Intercollegiate Championship - Summary",
        authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
     },
     { 
        image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
        content : "2025 Pan-American Intercollegiate Championship - Summary",
        authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
     },
     { 
      image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
      content : "2025 Pan-American Intercollegiate Championship - Summary",
      authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
   },
   { 
    image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
    content : "2025 Pan-American Intercollegiate Championship - Summary",
    authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
 },
 { 
  image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
  content : "2025 Pan-American Intercollegiate Championship - Summary",
  authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
},
{ 
  image : "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXNzfGVufDB8fDB8fHww",
  content : "2025 Pan-American Intercollegiate Championship - Summary",
  authorimg : "https://images.chesscomfiles.com/uploads/v1/news/411354.ba1d3f58.668x375o.1e1f13d86339@2x.jpeg",   
},
    
    ] 

const [topicsarr,settopicsarr]=useState(topics);

const handleOnClick = (selectedTopic) => {
   
    const updatedTopics = topicsarr.map((topic) =>
      topic.title === selectedTopic.title
        ? { ...topic, click: true }
        : { ...topic, click: false }
    );

    settopicsarr(updatedTopics); 
  };

    return (
    <div className='ml-[3rem] mt-[1rem] mb-[1rem] w-[65%] bg-white rounded-l-xl rounded-r-xl overflow-y-auto h-[39.5rem]'>

        <div className='flex justify-between px-6 py-3'>
            <p className=' font-semibold pl-2 text-[1.2rem] pt-2'>
                Popular
            </p>

            <div className='flex'>
              {topicsarr.map((ele,index)=>{
                return  <Topic key={index}  topic={ele} handleOnClick={handleOnClick}/>
              })}

            </div>
        </div>

        <div className='px-4 py-2'>
            {dataarr.map((data,index)=>{
              return <DataItem key={index} data={data}/>
            })}
        </div>




    </div>
  )
}

export default Content