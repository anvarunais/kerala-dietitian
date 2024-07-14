import "./Destination.css";
import { Box, styled } from "@mui/material";
import Trainer from "../assets/trainer.jpg";
import Tailered from "../assets/tailered.jpg";
import Ongoing from "../assets/ongoing.jpg";
import Cash from "../assets/cash.jpg";

const Destination = ({}) => {
  const DishBox = styled(Box)(({ theme }) => ({
    maxWidth: 350,
    // backgroundImage: {Cash} ,
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    "&:hover": {
      backgroundColor: "#f5f5f5",
      boxShadow: "0 0 5px rgba(0, 0,0,0.2)",
      transform: "scale(1.05)",
      transition: "all 0.3s ease-in-out",
    },
  }));

  // const ImgContainer = styled(Box)(() => ({
  //   width: "100%",
  // }));
  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  return (
    <div className="destination">
      <h1>
        Why Choose Fitness Guard ?
      </h1>
      <div className="first-des">
        {/* FIRST CARD */}

        <DishBox>
          <Box className="paragraph" sx={{ padding: "1rem" }}>
            <h2>Certified Trainers</h2>
            <Box>
              <InfoBox>
                <p>
                  Our team of experts provides professional and personalized
                  fitness plans.
                </p>
              </InfoBox>
              <InfoBox>
                <img className="imagee" src={Trainer} alt="bedroomsIcon" />
              </InfoBox>
            </Box>
          </Box>
        </DishBox>

        {/* SECOUND CARD */}
        <DishBox>
          <Box className="paragraph" sx={{ padding: "1rem" }}>
            <h2>Tailored Plans</h2>
            <Box>
              <InfoBox>
                <p>
                  We create workout and nutrition plans customized to your
                  unique needs and goals.
                </p>
              </InfoBox>
              <InfoBox>
                <img className="imagee" src={Tailered} alt="bedroomsIcon" />
              </InfoBox>
            </Box>
          </Box>
        </DishBox>
      </div>

      {/* THIRED CARD */}
      <div className="first-des">
        <DishBox>
          <Box className="paragraph" sx={{ padding: "1rem" }}>
            <h2>Ongoing Support</h2>
            <Box>
              <InfoBox>
                <p>
                  Receive continuous motivation and support to keep you on
                  track.
                </p>
              </InfoBox>
              <InfoBox>
                <img className="imagee" src={Ongoing} alt="bedroomsIcon" />
              </InfoBox>
            </Box>
          </Box>
        </DishBox>

        {/* fOURT CARD */}
        <DishBox>
          <Box className="paragraph" sx={{ padding: "1rem" }}>
            <h2><spam className="span2">100%</spam> Cash Back Guarantee</h2>
            <Box>
              <InfoBox>
                <p className="paragraph">
                  If you see no change after 1 month, we offer a full refund.
                </p>
              </InfoBox>
              <InfoBox>
                <img className="imagee" src={Cash} alt="bedroomsIcon" />
              </InfoBox>
            </Box>
          </Box>
        </DishBox>
      </div>
    </div>
  );
};

export default Destination;
