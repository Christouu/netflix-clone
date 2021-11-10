import React from "react";
import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New user</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="koceto" />
        </div>
        <div className="newUserItem">
          <label>Fullname</label>
          <input type="text" placeholder="koceto plazza" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="kocetoegolqm@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="kocetotelefon" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Plazza" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
