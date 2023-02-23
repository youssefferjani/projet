import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import homevid from "./DIOR Fashion Film 2020  Directed by VIVIENNE & TAMAS.mp4";

const Home = () => {
  return (
    <div className="home">
    
      <div className="overlay">
        <video src={homevid} autoPlay loop muted />
         </div>
         
    </div>
  );
};

export default Home;