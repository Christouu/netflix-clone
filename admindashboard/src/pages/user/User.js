import React from "react";
import "./User.css";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Koceto</span>
              <span className="userShowUserTitle">razcukvash</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">kocetoegolqm</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.10.1984</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <LocalPhoneOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+nomeranakoceto</span>
            </div>
            <div className="userShowInfo">
              <EmailOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">kocetoegolqm@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Plazza, znaesh kude sum</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="koceto"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="razcukvash"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="kocetoegolqm"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Birthday</label>
                <input
                  type="text"
                  placeholder="10.10.1984"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone number</label>
                <input
                  type="text"
                  placeholder="+nakocetonomera"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="kocetoegolqm@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Plazza, znaesh kude sum"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
