import React, { useContext, useState } from "react";
import "./Login.css";

import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          className="loginInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}
