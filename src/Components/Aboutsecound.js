import React from "react";
import "./Aboutsecound.css";
import ReactDOM from "react-dom/client";
import Aboutsecoundimg from "../assets/aboutsecoundimg.jpg";

function Aboutsecound() {
  return (
    <div>
      <div className="container">
        <h1 className="mb-2">Why Choose UG Diet ?</h1>
        <div className="row py-5">
          <div className="col-md-6 col-sm-12">
            <>
              <ul className="ulstyle">
                <p className="paragrph">
                <li className="liststyle">
                  Certified Nutritionists: Personalized diet plans from our team
                  of professionals.{" "}
                </li>
                </p>
                <p className="paragrph">
                <li>
                  Tailored Plans: Customized for weight loss, muscle gain, or
                  health improvement
                </li>
                </p>
                <p className="paragrph">
                <li className="liststyle">Continuous Support: Ongoing motivation and guidance.</li>
                </p>
                <p className="paragrph">
                <li>
                  Satisfaction Guaranteed: No results in 1 month? Get a full
                  refund. 100% cash back if there are no changes.
                </li>
                </p>
              </ul>
            </>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={Aboutsecoundimg} alt="" className="Aboutsecoundimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsecound;
