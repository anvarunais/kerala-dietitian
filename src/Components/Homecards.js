import React from "react";
import Card from "react-bootstrap/Card";
import Imageone from "../assets/img4.png";
import Imagetwo from "../assets/img1.png";
import Imagethree from "../assets/support.avif";
import Imagefour from "../assets/img2.png";

function Homecards() {
  return (
    <div>
      <div className="container">
        <h1 className="Homecardheading mt-5 mb-5">Why Choose UG Diet Company?</h1>
        <div className="row py-5">
          <div className="col-md-3 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "400px" }}>
              <Card.Img variant="top" src={Imageone} />
              <Card.Body>
                <Card.Title
                  style={{ color: "#5a9f53", textDecoration: "uppercase" }}
                >
                  Certified Nutritionists
                </Card.Title>
                <Card.Text>
                  Personalized diet plans from our team of professionals
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "400px" }}>
              <Card.Img variant="top" src={Imagetwo} />
              <Card.Body>
                <Card.Title style={{ color: "#5a9f53" }}>
                  Tailored Plans
                </Card.Title>
                <Card.Text>
                  Customized for weight loss, muscle gain, or health
                  improvement.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "400px" }}>
              <Card.Img variant="top" src={Imagethree} />
              <Card.Body>
                <Card.Title style={{ color: "#5a9f53" }}>
                  Continuous Support
                </Card.Title>
                <Card.Text>Ongoing motivation and guidance</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "400px" }}>
              <Card.Img variant="top" src={Imagefour} />
              <Card.Body>
                <Card.Title style={{ color: "#5a9f53" }}>
                  Satisfaction Guaranteed
                </Card.Title>
                <Card.Text>
                  No results in 1 month? Get a full refund. 100% cash back if
                  there are no changes.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecards;
