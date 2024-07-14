// import Homepage from "../Components/Homepage";
import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import Contactdestination from "../Components/Contactdestination";
// import Contacthome from "../Components/Contacthome";
import Allhomeimages from "../Components/Allhomeimages";
import ContactImg from "../assets/contact-us-min.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <div>
        <img
          className="home-img"
          alt=""
          src={ContactImg}
        />
        <div className="home-text">
          {/* <h2>Welcome to</h2> */}
          <h1>CONTACT</h1>
          <p className="paragraph-text">
            Contact us today to learn more and sign up for our 1-month package.
          </p>
          <a
            href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
            target="_blank"
          >
            <button className="homeimgbtn">more info</button>
          </a>
        </div>
      </div>
      {/* <Allhomeimages
        cName="contact"
        HeroImg={ContactImg}
        mainheading="Contact"
        moreinfo="More info"
      /> */}
      {/* <Contacthome /> */}
      <Contactdestination />
      {/* <Homepage/> */}
      <Footers />
    </>
  );
}

export default Contact;
