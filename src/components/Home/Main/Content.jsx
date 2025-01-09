import React, { useEffect, useState } from "react";
import Topic from "./Topic/Topic";
import DataItem from "./Data/DataItem";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const Content = ({ selecteditem, filter, searchValue }) => {
  const topics = [
    { title: "Hot", click: true },
    { title: "New", click: false },
    { title: "Controversial", click: false },
    { title: "Rising", click: false },
    { title: "Top", click: false },
  ];

  const [topicsarr, settopicsarr] = useState(topics);
  const [topic, settopic] = useState("hot");
  const [dataarr, setdataarr] = useState([]);
  const [searchresultsarr, setsearchresultsarr] = useState([]);
  const [limit, setlimit] = useState(10);

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
    // const totalPages = Math.ceil(data.length / itemsPerPage);


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
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    const ordinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${ordinal(
      day
    )} ${month}, ${year} ${formattedHours}:${minutes} ${period}`;
  }

  const isValidImage = (imageUrl)=>{
    return imageUrl && imageUrl !== "" && imageUrl !== "self" && /\.(jpg|jpeg|png|gif|bmp)$/i.test(imageUrl);
  }

  const goToPage = (pageNumber) => {
    setlimit(pageNumber*itemsPerPage);
    setCurrentPage(pageNumber);
  };

  const fetchPosts = async () => {
    const arr = [];
    if (filter !== "" && topic !== "") {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/${filter}/${topic}/.json?limit=${limit}`
        );

        const res = await response.json();
        const dataArr = res.data.children;

        for (let i = 0; i < dataArr.length; i++) {
          const post = dataArr[i].data;
          const obj = {
            url: post.url,
            score:
              Number(post.score) > 1000
                ? `${(Number(post.score) / 1000).toFixed(1)}K`
                : post.score,
            ups: post.ups,
            downs: post.downs,
            title: post.title,
            postedAt: convertUnixToFormattedDate(post.created_utc),
            author: post.author,
            num_comments:
              Number(post.num_comments) > 1000
                ? `${Math.floor(Number(post.num_comments) / 1000)}K`
                : post.num_comments,
            imgurl: (isValidImage(post?.thumbnail) && post?.thumbnail) || null,
            authorimg:
              "https://t4.ftcdn.net/jpg/02/32/16/11/360_F_232161181_HP9vaSVs2tk2G3o1jfVH5QG7BceWnlyu.jpg",
          };
          arr.push(obj);
        }
      } catch (error) {
        console.error("Error fetching data from Reddit:", error);
      }
    }

    const currentData = arr.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    setdataarr(currentData);
  };

  const fetchSearchPosts = async () => {
    const arr = [];
    if (searchValue !== "") {
      try {
        const response = await fetch(
          `https://www.reddit.com/search.json?q=${searchValue}`
        );

        const res = await response.json();

        console.log(res);

        const dataArr = res.data.children;

        for (let i = 0; i < dataArr.length; i++) {
          const post = dataArr[i].data;
          const obj = {
            url: post.url,
            score:
              Number(post.score) > 1000
                ? `${(Number(post.score) / 1000).toFixed(1)}K`
                : post.score,
            ups: post.ups,
            downs: post.downs,
            title: post.title,
            postedAt: convertUnixToFormattedDate(post.created_utc),
            author: post.author,
            num_comments:
              Number(post.num_comments) > 1000
                ? `${Math.floor(Number(post.num_comments) / 1000)}K`
                : post.num_comments,
            imgurl: (isValidImage(post?.thumbnail) && post?.thumbnail) || null,
            authorimg:
              "https://t4.ftcdn.net/jpg/02/32/16/11/360_F_232161181_HP9vaSVs2tk2G3o1jfVH5QG7BceWnlyu.jpg",
          };
          arr.push(obj);
        }
      } catch (error) {
        console.error("Error fetching data from Reddit:", error);
      }
    }

    const currentSearchData = arr.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    setsearchresultsarr(currentSearchData);
  };

  useEffect(() => {
    fetchPosts();
    fetchSearchPosts();
  }, [filter, topic, searchValue,limit]);

  return (
    <div className="flex-col ml-[3rem] mt-[1rem] mb-[1rem] w-[65%] bg-white rounded-l-xl rounded-r-xl h-[38rem] cursor-pointer">
      <div className="bg-white rounded-l-xl rounded-r-xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 h-[37rem]">
        {searchValue === "" && (
          <>
            <div className="flex justify-between px-6 py-3">
              <p className=" font-semibold pl-2 text-[1.2rem] pt-2">
                {selecteditem}
              </p>

              <div className="flex">
                {topicsarr.map((ele, index) => {
                  return (
                    <Topic
                      key={index}
                      topic={ele}
                      handleOnClick={handleOnClick}
                    />
                  );
                })}
              </div>
            </div>

            <div className="px-4 py-2">
              {dataarr.length != 0 &&
                dataarr.map((data, index) => {
                  return <DataItem key={index} data={data} />;
                })}

              {dataarr.length == 0 && 
              
              <div className="flex justify-center">

                <div className="flex items-center mt-[7rem]">
                  <img className="w-[15rem]" src="https://media.istockphoto.com/id/1290154699/vector/comic-speech-bubble-with-text-oops-message-in-pop-art-style.jpg?s=612x612&w=0&k=20&c=4J-vEqvSWx-HEq8IiG5qP1WcM4Sf1xNsmXNInjMzWHY="/>
                  <p className="text-[2rem] font-semibold">No Posts</p>                
                </div>
              </div>
              }
            </div>
          </>
        )}

        {searchValue !== "" && (
          <>
            <div className="flex justify-between px-6 py-3">
              <p className=" font-semibold pl-2 text-[1.3rem] pt-2">
                Search Results for `{searchValue}`
              </p>
            </div>

            <div className="px-4 py-2">
              {searchresultsarr.length != 0 &&
                searchresultsarr.map((data, index) => {
                  return <DataItem key={index} data={data} />;
                })}

              {searchresultsarr.length == 0 && <p>No Posts</p>}
            </div>
          </>
        )}
      </div>

      <div className="bg-slate-200 p-1 pt-2 items-center cursor-pointer">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-slate-300 p-2 rounded-md hover:bg-slate-100"
        >
          <FaChevronLeft className="text-slate-500  cursor-pointer "/>
        </button>
 
        <button
          key={currentPage}
          className="text-slate-500 text-[1.1rem] font-semibold p-1 px-4 bg-slate-300 mx-2 rounded-md "
        >
          {currentPage}
        </button>
      
        <button
          className=" p-2 rounded-md hover:bg-slate-100 bg-slate-300"
          onClick={() => goToPage(currentPage + 1)}
          disabled = {dataarr.length ===0}
        >
          <FaChevronRight className="text-slate-500  cursor-pointer"/>
        </button>
      </div>
    </div>
  );
};

export default Content;
