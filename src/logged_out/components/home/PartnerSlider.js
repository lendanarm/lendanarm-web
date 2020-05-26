//Package Imports
import React, { Component } from "react";
import Slider from "react-slick";
//Local Image Imports
import whoImg from "../../data/images/who.svg";
import resImg from "../../data/images/resolutionproject.png";
import hiex from "../../data/images/hiex.svg";
import unaids from "../../data/images/unaids.png";
import ciscoImg from "../../data/images/cisco.png";

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
      autoplaySpeed: 5000,
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
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <div style={{ marginTop: "5%" }}>
        <Slider {...settings}>
          <div>
            <img
              src={resImg}
              alt="Resolution Project"
              style={{ margin: "auto", width: "80%" }}
              className={classes.awards}
            />
          </div>
          <div>
            <img
              src={unaids}
              alt="ResolutionProject"
              style={{ margin: "auto", width: "80%", marginTop: "35%" }}
              className={classes.awards}
            />
          </div>
          <div>
            <img
              src={hiex}
              style={{ margin: "auto", width: "80%", marginTop: "35%" }}
              className={classes.awards}
            />
          </div>
          <div>
            <img
              src={whoImg}
              alt="WHO regional office for Africa"
              style={{ margin: "auto", width: "80%", marginTop: "17%" }}
              className={classes.awards}
            />
          </div>
          <div>
            <img
              src={ciscoImg}
              style={{ margin: "auto", width: "80%", marginTop: "10%" }}
              className={classes.awards}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
