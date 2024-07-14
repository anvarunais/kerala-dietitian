import "./Servicehome.css";
import React from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import Serviceimgone from "../assets/service-img.jpeg";


function Servicehome() {
  return (
    <>
      <div>
        <img src={Serviceimgone} alt="" />
      </div>
      <div>
        <h1>SERVICES</h1>
      </div>
    </>
  );
}

export default Servicehome;
