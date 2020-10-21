import React from "react";
import Navigation from "../Navigation/Navigation";
import "./About.css";
import { Grid, Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import me from "../../Image/me.JPG";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
          <title>About | Shuhin</title>
          <meta
            name="description"
            content="I'm Mahmudur Rahman Shuhin, a creative front-end developer. I develop web applications and Websites. My core skill is based on JavaScript and I love to do most of things using JavaScript. I love to make the web more open to the world. I am currently pursuing my bachelor's degree at Metropolitan University, Sylhet(Last Year). I am available for any good job opportunities."
            />
        <meta name="keywords" content="portfolio website front-end-developer developer Shuhin MR Shuhin"/>
      </Helmet>
      <div className="about">
        <Navigation color={"black"}></Navigation>
        <div className="about__me">
          <p>About Me</p>
          <h2 data-aos="zoom-in">I'm Mahmudur Rahman Shuhin, a creative front-end developer</h2>
          <p>
          I develop web applications and Websites. My core skill is based on JavaScript and I love to do most of things using JavaScript. I love to make the web more open to the world. I am currently pursuing my bachelor's degree at Metropolitan University, Sylhet(Last Year). I am available for any good job opportunities.
          </p>
        </div>
      </div>
      <div className="background">
        <Grid container className="background__grid">
          <Grid md={6} xs={12} className="background__grid__col">
            <h3>01</h3>
            <h3>BACKGROUND</h3>
            <p>
            I have attained a BSc in Computer Science and Engineering from the University of Metropolitan Sylhet. I completed the web development and full-stack web development masterclass: beginner to advance with programming hero of Jhankar Mahbub and Udemy.
            </p>
          </Grid>
          <Grid md={6} xs={12} className="background__grid__col">
            <h3>02</h3>
            <h3>LANGUAGES</h3>
            <p>
              I utilize the following programming languages to build the
              backbone of effeicient, future-proof websites.
            </p>
            <div>
              <p>
                <AddIcon></AddIcon> HTML5
              </p>
              <p>
                <AddIcon></AddIcon>CSS3
              </p>
              <p>
                <AddIcon></AddIcon> Javascript
              </p>
              <p>
                <AddIcon></AddIcon> C
              </p>
              <p>
                <AddIcon></AddIcon> C++
              </p>
            </div>
          </Grid>
          <Grid md={6} xs={12} className="background__grid__col">
            <h3>03</h3>
            <h3>FRAMEWORK & DATABASE</h3>
            <p>
              I utilize the following frameworks to build the backbone of
              effeicient, future-proof websites.
            </p>
            <div>
              <p>
                <AddIcon></AddIcon> React
              </p>
              <p>
                <AddIcon></AddIcon> Redux
              </p>
              <p>
                <AddIcon></AddIcon> Express Js
              </p>
              <p>
                <AddIcon></AddIcon> MongoDb
              </p>
              <p>
                <AddIcon></AddIcon> FireBase
              </p>
              <p>
                <AddIcon></AddIcon> PostgraceSQL
              </p>
            </div>
          </Grid>
          <Grid md={6} xs={12} className="background__grid__col">
            <h3>04</h3>
            <h3>PLATFORMS & TOOLS</h3>
            <p>I also use the following platforms and tools</p>
            <div>
              <p>
                <AddIcon></AddIcon> Bootstrap
              </p>
              <p>
                <AddIcon></AddIcon>
                Material UI
              </p>
              <p>
                <AddIcon></AddIcon>
                NPM
              </p>
              <p>
                <AddIcon></AddIcon>
                Chrome Dev Tool
              </p>
              <p>
                <AddIcon></AddIcon> GIT Version Control
              </p>
              <p>
                <AddIcon></AddIcon> API's
              </p>
              <p>
                <AddIcon></AddIcon> Figma
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
