import "./topbar.scss";
import {Language, Notifications, Settings } from '@mui/icons-material';

const Topbar = () => {
  return(
     <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Asset Inventory</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                  <Notifications />
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <Language />
                </div>
                <div className="topbarIconContainer">
                  <Settings />
                </div>
                <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar