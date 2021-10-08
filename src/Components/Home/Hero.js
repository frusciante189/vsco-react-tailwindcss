import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="https://assets.vsco.co/assets/images/homepage-2020/reflect-campaign_desktop_red.jpg"
            alt=""
            className="w-full md:h-99 h-98 object-cover"
          />
        </div>
        <div>
          <img
            src="https://assets.vsco.co/assets/images/homepage-2020/reflect-campaign_desktop_yellow.jpg"
            alt=""
            className="w-full md:h-99 h-98 object-cover"
          />
        </div>
        <div>
          <img
            src="https://assets.vsco.co/assets/images/homepage-2020/reflect-campaign_desktop_green.jpg"
            alt=""
            className="w-full md:h-99 h-98 object-cover"
          />
        </div>
      </Slider>
      <div className="bg-red-200 w-full flex items-center">
        <div className="flex flex-col items-center w-full md:items-start md:w-1/3 absolute z-40 md:top-1/2 md:left-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:-translate-y-1/2 ">
          <h1 className="text-2xl text-white tracking-wider text-center md:text-left w-full">
            Where expression matters most
          </h1>
          <button className="mt-6 bg-black text-white px-4 py-3 font-semibold rounded-sm xl:w-1/3 lg:w-1/2">
            Download VSCO
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
