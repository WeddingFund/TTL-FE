import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", "success"); // @todo 로그인 로직 추가
    navigate("/feed");
  };
  return (
    <div>
      <h1>Landing</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Landing;
