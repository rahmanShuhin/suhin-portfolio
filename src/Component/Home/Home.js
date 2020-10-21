import React from "react";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import { Link, useHistory } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Grid, Button } from "@material-ui/core";
import mockup from "../../Image/mockup.jpg";
const Home = () => {
  let history = useHistory();
  return (
    <>
      <div className="home">
        <Navigation color={"white"}></Navigation>
        <div className="home__caption">
          <div className="home__caption__text" data-aos="zoom-in">
            <h3>Hi , I'm</h3>
            <h2>Mahumudur Rahman Shuhin</h2>
            <h2>a front-end developer .</h2>
            <Link className="link" to="/about">
              Learn More <ArrowForwardIcon></ArrowForwardIcon>
            </Link>
          </div>
          <div class="mouse">
            <div class="mouse-icon">
              <span class="mouse-wheel"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="home__pixel__perfect">
        <Grid container className="home__pixel__grid">
          <Grid md={6} className="home__pixel__grid__left">
            <div>
              <h3>Creative & Engaging</h3>
              <h2>I build pixel-perfect web solutions for all devices</h2>
              <Button className="btn__work_1" onClick={()=>history.push("/work")}>View My Work</Button>
              <Button className="btn__resume" onClick={()=> window.location.href = 'https://drive.google.com/file/d/1Jt-GExxxz8DCcjPYEpQC8tJjiumJqv8G/view?usp=sharing'}>View My Resume</Button>
            </div>
          </Grid>
          <Grid
            md={6}
            className="home__pixel__grid__right"
            data-aos="fade-left"
          >
            <img src={mockup} alt="mockup" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
