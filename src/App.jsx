import SideBar from "./components/Home/SideBar/SideBar"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <div className="bg-slate-200 cursor-pointer max-h-screen">
     <NavBar/>
    <div className="flex">
      <SideBar/>
    </div>
    </div>
  )
}

export default App
