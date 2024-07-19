import "./Homepage.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Homeimgone from "../assets/aboutsecoundimg.jpg";

function Homepage() {
  return (
    <>
      <section id="demos-home" class="main-carousel-one">
        <div className="mt-5"></div>
        <div class="row">
          <div class="large-12 columns">
            <div
              class="owl-carousel owl-theme owl-loaded owl-drag"
              id="my-carousel-one"
            >
              <div class="owl-stage-outer">
                <div class="owl-stage">
                  <div class="owl-item active">
                    <div class="item">
                      <div class="row">
                        <div className="col-lg-6 col-md-6 col-sm-12  order-2 order-md-1 col-xs-12 column">
                          <h1 className="homeheading2 mt-3">
                            KERALA DIETITION
                          </h1>
                          <h2 className="homeheading1 mt-3">
                            Get Healthy with Expert Help
                          </h2>
                          <p className="homeparagraph mt-3">
                            Start for better health with our 1-month package for
                            just <span className="homespann">₹1000.</span>{" "}
                            Experience the KERALA DIETITION difference now!
                            Experience the{" "}
                            <span className="homespann">kerala dietition </span>
                            difference now!
                          </p>
                          <div className="mt-3 mb-3">
                            <a
                              href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about kerala dietition"
                              target="_blank"
                            >
                              <button className="homeimgbtn1">START NOW</button>
                            </a>
                          </div>
                        </div>

                        <div class="col-lg-6 col-md-6   order-1 order-md-2 col-xs-12 ">
                          <div class="bg_img">
                            <img
                              class="homeimages entered lazyloaded "
                              src={Homeimgone}
                              alt="Coach Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
