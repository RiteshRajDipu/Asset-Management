// import React, { useContext } from "react";
import "./update.scss";
// import { update, remove } from "../../redux/userSlice";
import { useState } from "react";
import Warning from "./Warning";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
// import { updateUser2 } from "../../redux/userSlice";

export default function Update() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({name, email}))

    setTimeout(() => {
        navigate('/');
      }, 2000);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove());

    setTimeout(() => {
        navigate("/");
    }, 2000);
  };

  return (
    <div className="update">
        {/* <Navbar /> */}
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="./mypic.jpg"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              // disabled={user.pending}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
            {/* {user.error && <span className="error">Something went wrong!</span>}
            {user.pending === false && (
              <span className="success">Account has been updated!</span>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
}
