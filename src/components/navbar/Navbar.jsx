import "./navbar.scss";
import { Settings } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const name = useSelector(state => state.user.name);

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
        <Settings />
      </div>
    </div>
  );
}

export default Navbar;