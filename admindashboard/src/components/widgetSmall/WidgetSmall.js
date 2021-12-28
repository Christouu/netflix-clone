import React, { useEffect, useState } from "react";
import "./WidgetSmall.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";

export default function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzlmOTI0MmQyNDdmMzQ2MjRiMWZkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY5NDQ0MCwiZXhwIjoxNjQxMTI2NDQwfQ.W2e8NWg3ssLj-qnhnju6m-XO3yMssZ16DQUFeOycKpQ",
          },
        });

        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        {newUsers.map((user) => (
          <li className="widgetSmallListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmallImg"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">{user.username}</span>
            </div>
            <button className="widgetSmallButton">
              <VisibilityIcon className="widgetSmallIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
