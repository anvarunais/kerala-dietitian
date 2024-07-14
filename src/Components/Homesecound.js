import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Imagefive from "../assets//ugdiet-logo.png";
import "./Homesecound.css";

function Homesecound() {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 col-sm-12">
            <img src={Imagefive} alt="/" className="Homesecoundimg" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="Homesecoundheading">UG DIET COMPANY</h4>
            <p className="Homesecoundparagraph mt-5">
              Achieve your health goals with UG Diet Company. Our expert advice,
              personalized diet plans, and ongoing support ensure you get the
              results you desire. Join our community of satisfied clients today!
              <br />
              Start your journey towards better health with our 1-month package
              for just ₹1000. Experience the UG Diet difference now!
            </p>

            <a href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!" target="_blank">
            <button className="homebtn">Join Us</button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesecound;
