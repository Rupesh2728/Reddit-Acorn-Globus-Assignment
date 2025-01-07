import Advertise from "./components/Home/AdvertiseSection/Advertise"
import Content from "./components/Home/Main/Content"
import SideBar from "./components/Home/SideBar/SideBar"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <div className="bg-slate-200 cursor-pointer max-h-screen">
     <NavBar/>
    <div className="flex">
      <SideBar/>
      <Content/>
      <Advertise/>
    </div>
    </div>
  )
}

export default App
