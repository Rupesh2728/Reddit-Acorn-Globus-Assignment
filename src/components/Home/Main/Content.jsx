import React, { useEffect, useState } from 'react'
import Topic from './Topic/Topic'
import DataItem from './Data/DataItem';

const Content = ({selecteditem,filter,searchValue}) => {
  
    const topics = [
        { title: "Hot", click: true },
        { title: "New", click: false },
        { title: "Controversial", click: false },
        { title: "Rising", click: false },
        { title: "Top", click: false },
      ];

const [topicsarr,settopicsarr]=useState(topics);
const [topic,settopic]=useState("hot");
const [dataarr,setdataarr]= useState([]);
const [searchresultsarr, setsearchresultsarr] = useState([]);

const handleOnClick = (selectedTopic) => {
  
    const updatedTopics = topicsarr.map((topic) =>
      topic.title === selectedTopic.title
        ? { ...topic, click: true }
        : { ...topic, click: false }
    );

    const str = selectedTopic.title.toLowerCase();

    settopic(str);
    settopicsarr(updatedTopics); 
  };

  function convertUnixToFormattedDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); 

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; 

    const ordinal = (n) => {
        if (n > 3 && n < 21) return "th"; 
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    return `${day}${ordinal(day)} ${month}, ${year} ${formattedHours}:${minutes} ${period}`;
}

const fetchPosts = async () => {
  const arr = [];
  if (filter !== "" && topic !== "") {
      try {

          const response = await fetch(`https://www.reddit.com/r/${filter}/${topic}/.json?limit=50`);

          const res = await response.json();
          const dataArr = res.data.children;

          for (let i = 0; i < dataArr.length; i++) {
              const post = dataArr[i].data;     
              const obj = {
                  url: post.url,
                  score: Number(post.score) > 1000 ? `${(Number(post.score) / 1000).toFixed(1)}K` : post.score,
                  ups: post.ups,
                  downs: post.downs,
                  title: post.title,
                  postedAt: convertUnixToFormattedDate(post.created_utc), 
                  author: post.author,
                  num_comments: Number(post.num_comments) > 1000 ? `${Math.floor(Number(post.num_comments) / 1000)}K` : post.num_comments, 
                  imgurl: post?.thumbnail || null, 
                  authorimg : "https://t4.ftcdn.net/jpg/02/32/16/11/360_F_232161181_HP9vaSVs2tk2G3o1jfVH5QG7BceWnlyu.jpg"
              };
              arr.push(obj); 
          }

      } 
      catch (error) {
          console.error("Error fetching data from Reddit:", error);
      }
  } 
  
  setdataarr(arr);
};


const fetchSearchPosts = async () => {
  const arr = [];
  if (searchValue!=="") {
      try {

          const response = await fetch(`https://www.reddit.com/search.json?q=${searchValue}`);

          const res = await response.json();

          console.log(res);
          
          const dataArr = res.data.children;

          for (let i = 0; i < dataArr.length; i++) {
              const post = dataArr[i].data;     
              const obj = {
                  url: post.url,
                  score: Number(post.score) > 1000 ? `${(Number(post.score) / 1000).toFixed(1)}K` : post.score,
                  ups: post.ups,
                  downs: post.downs,
                  title: post.title,
                  postedAt: convertUnixToFormattedDate(post.created_utc), 
                  author: post.author,
                  num_comments: Number(post.num_comments) > 1000 ? `${Math.floor(Number(post.num_comments) / 1000)}K` : post.num_comments, 
                  imgurl: post?.thumbnail || null, 
                  authorimg : "https://t4.ftcdn.net/jpg/02/32/16/11/360_F_232161181_HP9vaSVs2tk2G3o1jfVH5QG7BceWnlyu.jpg"
              };
              arr.push(obj); 
          }

      } 
      catch (error) {
          console.error("Error fetching data from Reddit:", error);
      }
  } 
  
  setsearchresultsarr(arr);
};

  useEffect(()=>{

    fetchPosts();
    fetchSearchPosts();

  },[filter,topic, searchValue]);


    return (
    <div className='ml-[3rem] mt-[1rem] mb-[1rem] w-[65%] bg-white rounded-l-xl rounded-r-xl overflow-y-auto h-[39.5rem] cursor-pointer'>

        {searchValue === "" && <>
        
        <div className='flex justify-between px-6 py-3'>
            <p className=' font-semibold pl-2 text-[1.2rem] pt-2'>
                {selecteditem}
            </p>

            <div className='flex'>
              {topicsarr.map((ele,index)=>{
                return  <Topic key={index}  topic={ele} handleOnClick={handleOnClick}/>
              })}

            </div>
        </div>

        <div className='px-4 py-2'>
            {dataarr.length!=0 && dataarr.map((data,index)=>{
              return <DataItem key={index} data={data}/>
            })}

            {dataarr.length==0 && <p>No Posts</p>}
        </div>

        </>
        }

        { searchValue !=="" && 
        <>

        <div className='flex justify-between px-6 py-3'>
            <p className=' font-semibold pl-2 text-[1.3rem] pt-2'>
                Search Results for `{searchValue}` 
            </p>
        </div>

        <div className='px-4 py-2'>
          {searchresultsarr.length!=0 && searchresultsarr.map((data,index)=>{
               return <DataItem key={index} data={data}/>
          })}

          {searchresultsarr.length==0 && <p>No Posts</p>}
        </div>

        </>
        }

    </div>
  )
}

export default Content