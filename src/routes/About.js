import Navbar from "../Components/Navbar";
import Allhomeimages from "../Components/Allhomeimages";
import AboutImg from "../assets/about-us.jpg";
import Footers from "../Components/Footers";
import Aboutdestination from "../Components/Aboutdestination";
// import Abouthome from "../Components/Abouthome";
import Aboutsecound from "../Components/Aboutsecound";

function About() {
  return (
    <>
      <Navbar />
      <div>
        <img
          className="home-img"
          alt=""
          src={AboutImg}
        />
        <div className="home-text">
          {/* <h2>Welcome to</h2> */}
          <h1>ABOUT</h1>
          <p className="paragraph-text">
            We provide the tools and support you need to make lasting, positive
            changes in your diet and overall health.
          </p>
          <a
            href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
            target="_blank"
          >
            <button className="homeimgbtn">more info</button>
          </a>
        </div>
      </div>
      {/* <Allhomeimages cName="about" moreinfo="More info" HeroImg={AboutImg} mainheading="About"/> */}
      {/* <Abouthome/> */}
      <Aboutdestination />
      <Aboutsecound />
      <Footers />
    </>
  );
}

export default About;
