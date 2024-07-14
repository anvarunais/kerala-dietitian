import "./Homepage.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Homeimgone from "../assets/home-img-1.jpeg";
import Homeimgtwo from "../assets/home-img-2.jpeg";
import Homeimgthree from "../assets/home-img-3.jpeg";
import Homeimgfour from "../assets/home-img-4.jpeg";
import Homeimgfive from "../assets/home-img-5.jpeg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Homepage() {
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
          <img className="sliderimage" src={Homeimgone} />
          <div className="title" data-swiper-parallax="-300">
            <h1>
              Welcome to <br />
              UG Diet
            </h1>

            {/* <h1>UG Diet</h1> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="sliderimage" src={Homeimgtwo} />
          <div className="title" data-swiper-parallax="-300">
            <h1>
              Welcome to <br />
              UG Diet
            </h1>

            {/* <h1>UG Diet</h1> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="sliderimage" src={Homeimgthree} />
          <div className="title" data-swiper-parallax="-300">
            <h1>
              Welcome to <br />
              UG Diet
            </h1>

            {/* <h1>UG Diet</h1> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="sliderimage" src={Homeimgfour} />
          <div className="title" data-swiper-parallax="-300">
            <h1>
              Welcome to <br />
              UG Diet
            </h1>

            {/* <h1>UG Diet</h1> */}
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="sliderimage">
          <img className="sliderimage" src={Homeimgfive} />
          <div className="title" data-swiper-parallax="-300">
            <h1>
              Welcome to <br />
              UG Diet
            </h1>
            {/* <h1>UG Diet</h1> */}
          </div>
        </SwiperSlide>{" "}
      </Swiper>
    </>
  );
}

export default Homepage;
