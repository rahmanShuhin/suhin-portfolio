import React from "react";
import "./Footer.css";
import { Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__header" data-aos="zoom-in">
        <h2>Let's build something great together .</h2>
        <p>
          If you'd like to start a new project, need help with an existing
          project or have any other enquiry, please get in touch.
        </p>
      </div>
      <div className="footer__contact">
        <Grid container className="grid">
          <Grid lg={4} xs={12} md={6} className="grid__col">
            <EmailIcon></EmailIcon>
            <div className="grid__col__address">
              <div>
                <h3>EMAIL</h3>
                <p>suhin4000@gmail.com</p>
              </div>
            </div>
          </Grid>
          <Grid lg={4} xs={12} md={6} className="grid__col">
            <CallIcon></CallIcon>
            <div className="grid__col__address">
              <div>
                <h3>TELEPHONE</h3>
                <p>+880 1758155264</p>
              </div>
            </div>
          </Grid>
          <Grid lg={4} xs={12} md={6} className="grid__col">
            <LocationOnIcon></LocationOnIcon>
            <div className="grid__col__address">
              <div>
                <h3>LOCATION</h3>
                <p>Sylhet,Bangladesh.</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="footer__bottom">
          <div>
            <h3>SOCIAL</h3>
            <a href="https://www.facebook.com/suhin.rahman" className="link">Facebook</a>
            <a href="https://www.instagram.com/shuhin_who/" className="link">Instagram</a>
            <a href="https://github.com/rahmanShuhin" className="link">Github</a>
          </div>
          <div>
            <small>&copy; Shuhin 2020 | All Rights Reserved</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
