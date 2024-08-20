
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, Person, PsychologyOutlined, SettingsApplications, SettingsSystemDaydream, Store } from "@mui/icons-material";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Asset Inventary</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <Link to="/" style={{ textDecoration: "none" }}>
                        <Dashboard className="icon" />
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <Person className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
                    <li>
                        <Store className="icon" />
                        <span>Products</span>
                    </li>
                    {/* </Link> */}
                    <li>
                        <CreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                          <ExitToApp className="icon" />
                          <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar