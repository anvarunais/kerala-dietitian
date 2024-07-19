import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import Aboutdestination from "../Components/Aboutdestination";
import Homecards from "../Components/Homecards";

function About() {
  return (
    <>
      <Navbar />
      <div className="mt-5"></div>
      <Aboutdestination />
      <Homecards />
      <Footers />
    </>
  );
}

export default About;
