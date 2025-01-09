import { useState } from "react"
import Advertise from "./components/Home/AdvertiseSection/Advertise"
import Content from "./components/Home/Main/Content"
import SideBar from "./components/Home/SideBar/SideBar"
import NavBar from "./components/NavBar/NavBar"

function App() {
  
  const [selecteditem, setselecteditem] = useState("Home");
  const [filter, setfilter] = useState("");
  const [searchValue, setsearchvalue] = useState("");

  const Handlefilter =(ele)=>{
    setfilter(ele);
  }

  const HandleSearch =(ele)=>{
    setsearchvalue(ele);
  }

  return (
    <div className="bg-slate-200 cursor-pointer max-h-screen">
     <NavBar setselecteditem={setselecteditem} HandleSearch={HandleSearch}/>
    <div className="flex bg-slate-200">
      <SideBar Handlefilter={Handlefilter}/>
      <Content selecteditem={selecteditem} filter={filter} searchValue={searchValue}/>
      <Advertise/>
    </div>
    </div>
  )
}

export default App
