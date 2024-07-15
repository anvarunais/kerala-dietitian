import Navbar from "../Components/Navbar";
import Allhomeimages from "../Components/Allhomeimages";
import HomeImg from "../assets/home-min.jpg";
import Footers from "../Components/Footers";
import Homesecound from "../Components/Homesecound";
import Homecards from "../Components/Homecards";
import Experience from "../Components/Experience";
import Offers from "../Components/Offers";
import Servicedestination from "../Components/Servicedestination";

function Home() {
  return (
    <>
      <Navbar />

      <div>
        <img
          className="home-img"
          alt=""
          src={HomeImg}
        />

        <div className="home-text">
          <h2>Welcome to</h2>
          <h1>UG DIET</h1>
          <p className="paragraph-text">
            Achieve your health goals with UG Diet Company.<br/> Our expert advice,
            personalized diet plans, and ongoing support ensure you get the
            results you desire.
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
        cName="hero"
        mainheading="UG Diet"
        welcomeheading="Welcome to "
        welcomeparagraph="Achieve your health goals with UG Diet Company. Our expert advice, personalized diet plans, and ongoing support ensure you get the results you desire."
        moreinfo="More info"
        HeroImg={HomeImg}
      /> */}

      <Homesecound />
      <Homecards />
      <Servicedestination />
      <Offers />
      <Experience />
      <Footers />
    </>
  );
}

export default Home;
