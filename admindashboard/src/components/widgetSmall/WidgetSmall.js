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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODUwYzRlNDNhN2NmNzkxMWYyZmFlNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjEwOTQ5MSwiZXhwIjoxNjM2NTQxNDkxfQ.oQ6RjZq_3sTzgcn_p5cqbfjV7lErZqgdz2KjvjKyJIc",
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
          <li className="widgetSmallListItem">
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
