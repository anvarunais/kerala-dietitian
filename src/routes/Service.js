import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import Servicedestination from "../Components/Servicedestination";
import Allhomeimages from "../Components/Allhomeimages";
import ServiceImg from "../assets/our-service.jpg";
import Servicesection from "../Components/Servicesection";
// import Clientside from "../Clientside";

function Service() {
  return (
    <>
      <Navbar />
      <div>
        <img
          className="home-img"
          alt=""
          src={ServiceImg}
        />
        <div className="home-text">
          {/* <h2>Welcome to</h2> */}
          <h1>SERVICES</h1>
          <p className="paragraph-text">
            Start your journey towards better health with our 1-month package
            for just ₹1000. Experience the UG Diet difference now!
          </p>
          <a
            href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
            target="_blank"
          >
            <button className="homeimgbtn">more info</button>
          </a>
        </div>
      </div>
      {/* <Allhomeimages cName="service" moreinfo="More info" HeroImg={ServiceImg} mainheading="Services"/> */}
      <Servicesection />
      <Servicedestination />
      {/* <Clientside/> */}
      {/* <Servicesection/> */}
      <Footers />
    </>
  );
}

export default Service;
