import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button style={{ padding: 10, width: 100 }} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
