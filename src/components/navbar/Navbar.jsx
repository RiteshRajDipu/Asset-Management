import { useSelector } from "react-redux";
import "./navbar.scss";
import {  Settings } from "@mui/icons-material";


const Navbar = () => {
 const name = useSelector(state => state.user.name);

 console.log("navbar rendered")

  return (
    <div className="navbar">
      <div className="logo">
        <span>Asset Inventary</span>
      </div>
      <div className="icons">
        <div className="user">
          <img
            src="mypic.jpg"
            alt=""
          />
          <span>{name}</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
        <Settings />
      </div>




      {/* <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
        </div> */}
    </div>
  )
}

export default Navbar