import "./Servicedestination.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Imageone from "../assets/image-1.jpg";
import Imagetwo from "../assets/image-2.jpg";
import Imagethree from "../assets/image-3.png";
import Imagefour from "../assets/image-4.png";
import Imagefive from "../assets/image-5.png";
import Imagesix from "../assets/image-6.png";

const Servicedestination = () => {
  return (
    <>
      <div>
        <div className="container servicecontainer1 mb-5">
          <h1 className="servicesheading mb-5">Features of kerala dietition</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <Card
                style={{
                  marginBottom: "20px",
                  height: "300px",
                  alignItems: "center",
                  borderRadius: "20%",
                }}
              >
                <Card.Img
                  className="serviceweightlossimg"
                  variant="top"
                  src={Imageone}
                />
                <Card.Body>
                  <Card.Title>WEIGHT LOSS DIETS</Card.Title>
                  <Card.Text style={{ color: "#5a9f53" }}>
                    Safe and effective plans to shed pounds.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12 servicecolnm">
              <Card
                style={{
                  marginBottom: "20px",
                  height: "300px",
                  alignItems: "center",
                  borderRadius: "20%",
                }}
              >
                <Card.Img className="serviceimg" variant="top" src={Imagetwo} />
                <Card.Body>
                  <Card.Title>MUSCLE GAIN DIETS</Card.Title>
                  <Card.Text style={{ color: "#5a9f53" }}>
                    Nutrient-rich plans to build muscle mass
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card
                style={{
                  marginBottom: "20px",
                  height: "300px",
                  alignItems: "center",
                  borderRadius: "20%",
                }}
              >
                <Card.Img
                  className="serviceimg"
                  variant="top"
                  src={Imagethree}
                />
                <Card.Body>
                  <Card.Title>HEALTH IMPROVEMENT DIETS</Card.Title>
                  <Card.Text style={{ color: "#5a9f53" }}>
                    Balanced diets for overall wellness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-12">
              <Card
                style={{
                  marginBottom: "20px",
                  height: "300px",
                  alignItems: "center",
                  borderRadius: "20%",
                }}
              >
                <Card.Img
                  className="serviceimg"
                  variant="top"
                  src={Imagefour}
                />
                <Card.Body>
                  <Card.Title>VEGETARIAN & VEGAN DIETS</Card.Title>
                  <Card.Text style={{ color: "#5a9f53" }}>
                    Plant-based plans for a healthy lifestyle.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card
                style={{
                  marginBottom: "20px",
                  height: "300px",
                  alignItems: "center",
                  borderRadius: "20%",
                }}
              >
                <Card.Img
                  className="serviceimg"
                  variant="top"
                  src={Imagefive}
                />
                <Card.Body>
                  <Card.Title>GLUTEN-FREE DIETS</Card.Title>
                  <Card.Text style={{ color: "#5a9f53" }}>
                    Safe and delicious options for gluten intolerance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card
                style={{
                  marginBottom: "10px",
                  height: "300px",
                  alignItems: "center",
                  borderRadius: "20%",
                }}
              >
                <Card.Img className="serviceimg" variant="top" src={Imagesix} />
                <Card.Body>
                  <Card.Title>KETO DIETS</Card.Title>
                  <Card.Text style={{ color: "#5a9f53" }}>
                    Low-carb, high-fat plans to accelerate fat loss.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicedestination;
