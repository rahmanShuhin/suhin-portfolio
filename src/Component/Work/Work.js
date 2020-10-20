import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Work.css";
import { Grid, Card, Chip, Link } from "@material-ui/core";
import red_onion from "../../Image/red_onion.PNG";
import doctor from "../../Image/doctor.PNG";
import car_bibles from "../../Image/car_bibles.PNG";
import gym from "../../Image/gym.PNG";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Helmet } from "react-helmet";
const Work = () => {
  return (
    <div className="work">
      <Helmet>
          <title>Work | Shuhin</title>
          <meta
            name="description"
            content="Here is my Sample Work Project.I love to do most of the things using JavaScript. I
            love to make the web more open to the world. I am currently pursuing
            my bachelor's degree at Metropolitan University, Sylhet(Last Year).
            I am available for any good job opportunities. "
            />
        <meta name="keywords" content="portfolio website front-end-developer developer Shuhin MR Shuhin"/>
      </Helmet>
      <Navigation color="black"></Navigation>
      <div className="work__caption">
        <h2>Some Things I've Built</h2>
      </div>
      <div className="work__project">
        <div data-aos="zoom-in">
          <a href="https://red-onion-suhin.web.app" className="link">
            <img src={red_onion} alt="" />
          </a>
        </div>
        <div>
          <h5>Featured Project</h5>
          <h2 style={{ color: "red" }}>Red Onion</h2>
          <div>
            <p>
            A single page restaurant app where people are able to select food in their cart and checkout the cart with their information.
            </p>
          </div>
          <div className="work__project__bottom">
            <Chip label="React" />
            <Chip label="Firebase" />
            <a href="https://github.com/rahmanShuhin/red-onion" className="link2">
              <GitHubIcon></GitHubIcon>
            </a>
            <a href="https://red-onion-suhin.web.app" className="link2">
              <VisibilityIcon></VisibilityIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="work__project">
        <div data-aos="zoom-in">
            <a href="https://doctors-portal-suhin.web.app/" className="link">
                <img src={doctor} alt="" />
            </a>
        </div>
        <div>
          <h5>Featured Project</h5>
          <h2 style={{ color: "teal" }}>Doctors Portal</h2>
          <div>
            <p>
            A single-page web app with a dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient
            from his dashboard.
            </p>
          </div>
          <div className="work__project__bottom">
            <Chip label="React" />
            <Chip label="NodeJs" />
            <Chip label="MongoDB" />
            <a href="#" className="link2">
              <GitHubIcon></GitHubIcon>
            </a>
            <a href="#" className="link2">
              <VisibilityIcon></VisibilityIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="work__project">
        <div data-aos="zoom-in">
          <a href="https://rahmanshuhin.github.io/CAR_BIBLES/" className="link">
            <img src={car_bibles} alt="" />
          </a>
        </div>
        <div>
          <h5>Featured Project</h5>
          <h2>Car Bibles</h2>
          <div>
            <p>
            Car bible is a single-page website with a responsive hamburger and dropdown menu  
            </p>
          </div>
          <div className="work__project__bottom">
            <Chip label="HTML5" />
            <Chip label="CSS3" />
            <Chip label="Javascript" />
            <a href="https://github.com/rahmanShuhin/CAR_BIBLES" className="link2">
              <GitHubIcon></GitHubIcon>
            </a>
            <a href="https://rahmanshuhin.github.io/CAR_BIBLES/" className="link2">
              <VisibilityIcon></VisibilityIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="work__project">
        <div data-aos="zoom-in">
          <a href="https://power-x-gym-2ef9d.web.app/" className="link">
            <img src={gym} alt="" />
          </a>
        </div>
        <div>
          <h5>Featured Project</h5>
          <h2 style={{ color: "gold" }}>Power X Gym</h2>
          <div>
            <p>
                Gym website  where anyone can create a membership with online PayPal payment
            </p>
          </div>
          <div className="work__project__bottom">
            <Chip label="React" />
            <Chip label="Node js" />
            <Chip label="Paypal" />
            <a href="https://github.com/rahmanShuhin/CAR_BIBLES" className="link2">
              <GitHubIcon></GitHubIcon>
            </a>
            <a href="https://power-x-gym-2ef9d.web.app/" className="link2">
              <VisibilityIcon></VisibilityIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
