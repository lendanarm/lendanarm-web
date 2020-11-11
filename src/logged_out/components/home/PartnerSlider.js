//Package Imports
import React, { Component } from "react";
import Slider from "react-slick";
//MUI Component Imports
import Typography from "@material-ui/core/Typography";
//Local Image Imports
import whoImg from "../../data/images/who.svg";
import resImg from "../../data/images/resolutionproject.png";
import hiex from "../../data/images/hiex.svg";
import unaids from "../../data/images/unaids.png";
import ciscoImg from "../../data/images/cisco.png";
import sarecoImg from "../../data/images/sareco.png";

export default class Responsive extends Component {
  render() {
    const { classes } = this.props;
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <div style={{ marginTop: "5%" }}>
        <Typography variant="h5" className={classes.partnerHeader}>
          Awards and Recognition
        </Typography>
        <Slider {...settings}>
          <div>
            <a
              href="https://resolutionproject.org/54th-social-venture-challenge-yields-two-new-winners-from-african-leadership-academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={resImg}
                alt=""
                style={{ margin: "auto", width: "80%" }}
                className={classes.awards}
              />
            </a>
          </div>
          <div>
            <a
              href="https://healthinnovation.exchange/innovation-2020-6.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={unaids}
                alt=""
                style={{ margin: "auto", width: "80%", marginTop: "25%" }}
                className={classes.awards}
              />
            </a>
          </div>
          <div>
            <img
              src={hiex}
              alt=""
              style={{ margin: "auto", width: "80%", marginTop: "25%" }}
              className={classes.awards}
            />
          </div>
          <div>
            <a
              href="http://innov.afro.who.int/innovators/dr-imodoye-abioro-27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whoImg}
                alt=""
                style={{ margin: "auto", width: "80%", marginTop: "17%" }}
                className={classes.awards}
              />
            </a>
          </div>
          <div>
            <a
              href="https://cisco.innovationchallenge.com/cisco-global-problem-solver-challenge-2020/semi-finalists"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ciscoImg}
                alt=""
                style={{ margin: "auto", width: "80%", marginTop: "5%" }}
                className={classes.awards}
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.venturelab.ch/20-African-startups-participate-in-a-threeday-online-SABII-workshop?s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={sarecoImg}
                alt=""
                style={{ margin: "auto", width: "80%", marginTop: "14%" }}
                className={classes.awards}
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
