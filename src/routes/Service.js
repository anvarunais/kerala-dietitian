import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import Servicedestination from "../Components/Servicedestination";
import Servicesection from "../Components/Servicesection";
import Offers from "../Components/Offers";

function Service() {
  return (
    <>
      <Navbar />
      <div className="mt-5"></div>
      <Servicedestination />
      <Servicesection />
      <Offers />
      <Footers />
    </>
  );
}

export default Service;
