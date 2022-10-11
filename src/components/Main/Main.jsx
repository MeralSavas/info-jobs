import React from "react";
import "./Main.css";

const Main = ({ id, title, img, desc }) => {
  return (
    <div className="main">
      <div className="container">
        <h1>{title}</h1>
        <img src={img} alt="img" />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Main;
