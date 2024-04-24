// Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Contact Us</h2>
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
  );
};

export default Contact;
