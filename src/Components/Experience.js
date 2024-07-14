import "./Experience.css";
import Data from "../Data";
import { useState } from "react";
// import Clientside from "../Clientside";
import Card from "react-bootstrap/Card";
import Clientone from "../assets/anjali.png";
import Clienttwo from "../assets/ravi.png";
import Clientthree from "../assets/kiran.png";
function Experience() {
  return (
    <>

<div className="container">
        <h1 className="Homecardheading mt-5 mb-5">Hear from Our Clients</h1>
        <div className="row py-5">
          <div className="col-md-4 col-sm-12 mb-5">
              <Card.Img className="clientimage" variant="top" src={Clienttwo}  />
          </div>

          <div className="col-md-4 col-sm-12 mb-5">
              <Card.Img className="clientimage" variant="top" src={Clientone} />
          </div>

          <div className="col-md-4 col-sm-12 mb-5">
            {/* <Card style={{ marginBottom: "20px", height: "400px" }}> */}
              <Card.Img className="clientimage" variant="top" src={Clientthree} />
          </div>
        </div>
      </div>
      {/* <h1 className="success mt-5">Hear from Our Clients</h1>

      <div className="row py-5">
      <div className="col-md-4 col-sm-12 servicecolnm mb-3">
          <img className="clientimage" src={Clientone} />
        </div>

        <div className="col-md-4 col-sm-12 servicecolnm mb-3">
          <img className="clientimage" src={Clienttwo} />
        </div>

        <div className="col-md-4 col-sm-12">
          <img className="clientimage" src={Clientthree} />
        </div>
      </div>

      <div className="offerstyle">
      <p className="paragraphstyle">
        <span className="spanstyle2">If you don’t see results after 1 month, we’ll give you a full refund.</span>
        Our <span className="spanstyle">100% cash back</span> policy applies if there are no changes.
      </p>
    </div> */}
      
      {/* <div className="homecontainer">
        <div className="clientside">
          {Data.map((val) => {
            return (
              <>
                <Clientside {...val} />
              </>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
export default Experience;
