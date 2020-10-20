import React from "react";
import "./Skill.css";
import html from "../../Image/html.png";
import css from "../../Image/css.png";
import jquery from "../../Image/jquery.png";
import mongodb from "../../Image/mongodb.png";
import bootstrap from "../../Image/bootstrap.png";
import sass from "../../Image/sass.png";
import js from "../../Image/js.png";
import firebase from "../../Image/firebase.png";
import nodejs from "../../Image/nodejs.png";
import mui from "../../Image/mui.png";
import psql from "../../Image/psql.png";
import react from "../../Image/react.png";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Skill = () => {
  let history = useHistory();
  return (
    <>
      <div className="skill">
        <div className="skill__header">
          <div className="skill__header__text">
            <h2>SOME TECHNOLOGIES I'VE WORKED WITH</h2>
            <p>
              I've been doing web development for about 2 years now, and I'm
              always eager to learn more in this fast paced industry.
            </p>
          </div>
        </div>
        <div className="skill_bottom">
          <Grid container className="grid__techno">
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={html} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={css} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={jquery} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={mongodb} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={bootstrap} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={react} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={js} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={sass} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={nodejs} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={firebase} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={mui} alt="" />
            </Grid>
            <Grid
              sm={3}
              xs={6}
              className="grid__techno__col"
              data-aos="zoom-in"
            >
              <img src={psql} alt="" />
            </Grid>
          </Grid>
        </div>
        <div className="btn__work">
        <Button className="btn__resume" onClick={()=>history.push("/work")}>View My Work</Button>
        </div>
      </div>
      <div className="skill__work">
        <Grid container className="skill__work__container">
          <Grid md={6} xs={12} className="skill__work__container__left">
            <Link className="link" to="/work">
              Work
            </Link>
          </Grid>
          <Grid md={6} xs={12} className="skill__work__container__right">
            <Link className="link">Insights</Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Skill;
