// About.js
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Us</h2>
      <button onClick={() => navigate("/products")}>Go to Products</button>
    </div>
  );
};

export default About;
