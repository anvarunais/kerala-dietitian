import "./Footers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import WtspIcon from "../assets/whatsapp-logo.png";
import Footer_logo from "../assets/kerala-diet-logo.png";
import InstaIcon from "../assets/Instagram-logo.png";
import FacebookIcon from "../assets/facebook-logo.png";

const Footers = () => {
  return (
    <div className="footerstyle">
    <div className="container">
      <div className="row py-5  text-white">
        <div className="col-md-4 col-sm-12">
          <img src={Footer_logo} alt="" className="footerlogo" />
        </div>
        <div className="col-md-4 col-sm-12 mt-5">
          <h4 className="text-warning text-white">CONTACT</h4>
          <FaPhoneAlt className="me-2" />
          7025040484
          <br />
          <FaEnvelope className="me-2" />
          keraladietitian@gmail.com
          <br />
        </div>
        <div className="col-md-4 col-sm-12 mt-5">
          <h4 className="followus">FOLLOW US</h4>
          <p>
            <a href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about kerala dietition" target="_blank">
            <img className="followicon" src={WtspIcon} />
            </a>
            <a
              href="https://www.instagram.com/kerala_dietitian_?igsh=MXM4dDNhN3ozb2Z4ag=="
              target="_blank"
            >
              <img className="followicon" src={InstaIcon} />
            </a>
            <a href="https://www.facebook.com/keraladietitian/" target="_blank">
              <img className="followicon" src={FacebookIcon} />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Footers;
