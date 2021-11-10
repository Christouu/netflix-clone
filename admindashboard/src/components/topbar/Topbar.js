import React from "react";
import "./Topbar.css";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">KristouAdmin</span>
        </div>
        <div className="topright">
          <div className="topbarIcons">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIcons">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIcons">
            <SettingsIcon />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
