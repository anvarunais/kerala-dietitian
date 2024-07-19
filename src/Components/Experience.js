import "./Experience.css";
import Data from "../Data";
import { useState } from "react";
// import Clientside from "../Clientside";
import Card from "react-bootstrap/Card";
import Clientone from "../assets/client1.png";
import Clienttwo from "../assets/client2.png";
import Clientthree from "../assets/client3.png";
function Experience() {
  return (
    <>
      <div className="container">
        <h1 className="Homecardheading mt-5 mb-5">Hear from Our Clients</h1>
        <div className="row py-5">
          <div className="col-md-4 col-sm-12 mb-5">
            <a
              href="https://www.instagram.com/reel/C9cW87axx6D/?igsh=aHlienRkN3J4cHo4"
              target="_blank"
            >
              <Card.Img className="clientimage" variant="top" src={Clientone} />
            </a>
          </div>

          <div className="col-md-4 col-sm-12 mb-5">
            <a
              href="https://www.instagram.com/reel/C9M0RThSM0U/?igsh=MWc0dmQ4enhnMGN5eQ=="
              target="_blank"
            >
              <Card.Img className="clientimage" variant="top" src={Clienttwo} />
            </a>
          </div>

          <div className="col-md-4 col-sm-12 mb-5">
            <a
              href="https://www.instagram.com/reel/C9XKh_Oxv9o/?igsh=MXJiZDN2cGpxMzJqaw=="
              target="_blank"
            >
              <Card.Img
                className="clientimage"
                variant="top"
                src={Clientthree}
              />
            </a>
          </div>
          <a
            href="https://www.instagram.com/kerala_dietitian_?igsh=MXM4dDNhN3ozb2Z4ag=="
            target="_blank"
          >
            <button className="homeimgbtn1">watch More</button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Experience;
