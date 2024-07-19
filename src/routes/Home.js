import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import Homesecound from "../Components/Homesecound";
import Homecards from "../Components/Homecards";
import Experience from "../Components/Experience";
import Offers from "../Components/Offers";
import Servicedestination from "../Components/Servicedestination";
import Homepage from "../Components/Homepage";

function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Homesecound />
      <Offers />
      <Homecards />
      <Servicedestination />
      <Experience />
      <Footers />
    </>
  );
}

export default Home;
