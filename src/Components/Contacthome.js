import "./Contacthome.css"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Homeimgone from "../assets/contact-img.jpeg"
// import Homeimgtwo from "../assets/home-img-2.jpeg"
// import Homeimgthree from "../assets/home-img-3.jpeg";
// import Homeimgfour from "../assets/home-img-4.jpeg";
// import Homeimgfive from "../assets/home-img-5.jpeg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Contacthome() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Homeimgone} />
        <div className="title" data-swiper-parallax="-300">
          <h1>CONTACT US</h1>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={Homeimgtwo} />
        <div className="title" data-swiper-parallax="-300">
          <h2>Welcome to</h2>
          <h1>UG Diet</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Homeimgthree} />
        <div className="title" data-swiper-parallax="-300">
          <h2>Welcome to</h2>
          <h1>UG Diet</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Homeimgfour} />
        <div className="title" data-swiper-parallax="-300">
          <h2>Welcome to</h2>
          <h1>UG Diet</h1>
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img src={Homeimgfive} />
        <div className="title" data-swiper-parallax="-300">
          <h2>Welcome to</h2>
          <h1>UG Diet</h1>
        </div>
      </SwiperSlide>{" "} */}
    </Swiper>
  </>
  )
}

export default Contacthome
