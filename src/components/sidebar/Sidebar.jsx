
import { Link } from "react-router-dom";
import "./sidebar.scss";
// import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, Person, PsychologyOutlined, SettingsApplications, SettingsSystemDaydream, Store } from "@mui/icons-material";

import { menu } from "../../data";

function Sidebar() {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <span className="title">{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <Link to={listItem.url} className="listItem" key={listItem.id}>
                            <img src={listItem.icon} alt="" />
                            <span>{listItem.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;