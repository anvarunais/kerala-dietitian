import { colors } from "@mui/material";
import React from "react";

function Servicesection() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h1 className="mb-2">Our Services</h1>
        <>
          <ul className="ulstyle">
            <p className="paragrph">
              <li>
                <span className="spanstyle2">Customized Diet Plans:</span>{" "}
                Personalized diet plans tailored to your specific goals and
                preferences.{" "}
              </li>
            </p>
            <p className="paragrph">
              <li>
                <span className="spanstyle2">Expert Nutrition Advice:</span>{" "}
                Up-to-date research and advice to ensure your diet is effective
                and sustainable.
              </li>
            </p>
            <p className="paragrph">
              <li>
                <span className="spanstyle2">Ongoing Support:</span> Continuous
                motivation and support to help you stay on track
              </li>
            </p>
            <p className="paragrph">
              <li>
                <span className="spanstyle2">100% Satisfaction Guarantee:</span>{" "}
                If you don’t see results after 1 month, we’ll give you a full
                refund. Our 100% cash back policy applies if there are no
                changes.
              </li>
            </p>
          </ul>
        </>
      </div>
    </div>
  );
}

export default Servicesection;
