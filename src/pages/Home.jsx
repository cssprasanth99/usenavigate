// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
};

export default Home;
