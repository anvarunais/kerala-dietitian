import React from "react";
import Card from "react-bootstrap/Card";
import Imageone from "../assets/30daystrainer.png";
import Imagetwo from "../assets/excersice.png";
import Imagethree from "../assets/guarantee.png";

function Homecards() {
  return (
    <div>
      <div className="container">
        <h1 className="Homecardheading mt-5 mb-5">
          Why Choose kerala dietition ?
        </h1>
        <div className="row py-5">
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-3 col-sm-12">
            <Card
              style={{
                marginBottom: "20px",
                height: "400px",
                borderRadius: "70px",
              }}
            >
              <Card.Img className="imagecaards" variant="top" src={Imageone} />
              <Card.Body>
                <Card.Title
                  style={{ color: "#2c7a6c", textDecoration: "uppercase" }}
                >
                  30 Days Trainer program
                </Card.Title>
                <Card.Text className="cardbody">
                  Join our 30 Days Trainer program to achieve your fitness
                  goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 col-sm-12">
            <Card
              style={{
                marginBottom: "20px",
                height: "400px",
                borderRadius: "70px",
              }}
            >
              <Card.Img className="imagecaards" variant="top" src={Imagetwo} />
              <Card.Body>
                <Card.Title style={{ color: "#2c7a6c" }}>Excersice</Card.Title>
                <Card.Text className="cardbody">
                  Customized for weight loss, muscle gain, or health
                  improvement.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 col-sm-12">
            <Card
              style={{
                marginBottom: "20px",
                height: "400px",
                borderRadius: "70px",
              }}
            >
              <Card.Img className="imagecaards" variant="top" src={Imagethree} />
              <Card.Body>
                <Card.Title style={{ color: "#2c7a6c" }}>
                  100% Guarantee
                </Card.Title>
                <Card.Text className="cardbody">
                  Customized for weight loss, muscle gain, or health
                  improvement.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-1 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Homecards;
