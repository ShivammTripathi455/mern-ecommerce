import React from "react";
import "./aboutSection.css";
import { Typography, Button, Avatar } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/tripathishivamm";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/shivamm/image/upload/v1664744700/FB_IMG_1650812765878_bpwsfk.jpg"
              alt="Founder"
            />
            <Typography>Shivamm Tripathi</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Shivamm Tripathi. Only with the
              purpose to practice.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Pages</Typography>

            <a href="https://instagram.com/tripathishivamm" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
