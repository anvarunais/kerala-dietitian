import "./Abouthome.css";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aboutimgone from "../assets/aboutimg.jpeg";

function Abouthome() {
  return (
    <>
      <div>
        <img className="imgabouthome" src={Aboutimgone} alt="" />
      </div>
      <div>
        <h1 className="abouthead">ABOUT US</h1>
      </div>
    </>
  );
}

export default Abouthome;
