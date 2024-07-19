import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Imagefive from "../assets/kerala-diet-logo.png";
import "./Homesecound.css";

function Homesecound() {
  return (
    <div className="sectionmain">
      <div className="container">
        <div className="row py-5">
          <div
            className="col-md-6 col-sm-12 heading-section text-center mb-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="Homesecoundheading">MISSION</h4>
            <p className="Homesecoundparagraph mt-5">
              Achieve your health goals with kerala dietition. Our expert
              advice, personalized diet plans, and ongoing support ensure you
              get the results you desire. Join our community of satisfied
              clients today!
              <br />
              Start your journey towards better health with our 1-month package
              for just ₹1000. Experience the kerala dietition difference now!
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="Homesecoundheading">VISSION</h4>
            <p className="Homesecoundparagraph mt-5">
              Achieve your health goals with kerala dietition. Our expert
              advice, personalized diet plans, and ongoing support ensure you
              get the results you desire. Join our community of satisfied
              clients today!
              <br />
              Start your journey towards better health with our 1-month package
              for just ₹1000. Experience the kerala dietition difference now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesecound;
