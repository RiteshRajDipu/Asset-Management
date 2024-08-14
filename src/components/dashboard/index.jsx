import Topbar from "./topbar/Topbar"
import Sidebar from "./sidebar/Sidebar"
import "./index.css";
import Home from "../../pages/home/Home";
import UserList from "../../pages/userList/UserList";


const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  )
}

export default Dashboard