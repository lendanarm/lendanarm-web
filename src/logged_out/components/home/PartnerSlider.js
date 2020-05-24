//Package Imports
import React, { Component } from "react";
import Slider from "react-slick";
//Local Image Imports
import whoImg from "../../data/images/who.svg";
import resImg from "../../data/images/resolutionproject.png";
import hiex from "../../data/images/hiex.svg";
import unaids from "../../data/images/unaids.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div style={{ marginTop: "5%" }}>
        <Slider {...settings}>
          <div>
            <img src={resImg} alt="Resolution Project" />
          </div>
          <div>
            <img
              src={unaids}
              alt="ResolutionProject"
              style={{ width: "90%", marginTop: "25%" }}
            />
          </div>
          <div>
            <img
              src={hiex}
              alt="Health Innovation Exchange"
              style={{ width: "90%", marginTop: "25%" }}
            />
          </div>
          <div>
            <img
              src={whoImg}
              alt="WHO regional office for Africa"
              style={{ marginTop: "10%" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
