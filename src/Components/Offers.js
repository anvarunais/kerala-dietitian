import React from "react";
import "./Offers.css";
import Card from "react-bootstrap/Card";
import Instaone from "../assets/insta1.jpeg";
import Instatwo from "../assets/insta2.jpeg";
import Instathree from "../assets/insta3.jpeg";
import WtspIcon from "../assets/whatsapp-logo.png";
function Offers() {
  return (
    <div class="container">
      <h1 class="Homecardheading mt-5 mb-5 text-center">Get in Touch</h1>
      <div class="row py-5">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/videoseries?list=PLdHo3fJwC2n4a3PW1hZERENh7m_pJE3Y7"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/1EigG5RbcP4"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/videoseries?list=PLdHo3fJwC2n4a3PW1hZERENh7m_pJE3Y7"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12 mb-5">
          <a
            href="https://www.instagram.com/kerala_dietitian_?igsh=MXM4dDNhN3ozb2Z4ag=="
            target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instaone} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12 mb-5">
          <a
            href="https://www.instagram.com/kerala_dietitian_?igsh=MXM4dDNhN3ozb2Z4ag=="
            target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instatwo} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12 mb-5">
          <a
            href="https://www.instagram.com/kerala_dietitian_?igsh=MXM4dDNhN3ozb2Z4ag=="
            target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instathree} />
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about kerala dietition"
        target="_blank"
      >
        <button className="homeimgbtn1">
          <img className="followicons" src={WtspIcon} />
          CHAT NOW
        </button>
      </a>
    </div>
  );
}

export default Offers;
