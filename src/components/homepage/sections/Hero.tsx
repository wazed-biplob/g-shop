"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "../Card";
import { FaArrowAltCircleRight } from "react-icons/fa";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightgrey",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    >
      <FaArrowAltCircleRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightgrey",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
}

const HeroSection = ({ data }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-[#00000099] pt-[70px] pb-[60px]">
      <div className="flex flex-col gap-y-8 w-[70%] mx-auto text-center">
        <h1 className="font-bold text-[45px] text-white">
          Fresh Catch: Your Premier Destination
          <br /> for Quality Seafood Delights!
        </h1>
        <p className="text-[16px] text-[#CECCCC]">
          Dive into a world of ocean-fresh flavors at our fish market. From sea
          to table, we bring you the finest catch, every time!
        </p>
      </div>
      <div className="slider-container px-8 w-[90%] mx-auto mt-[60px]">
        <Slider {...settings} className="px-10">
          {data?.data?.map((card: any) => (
            <div key={card.id} className="pr-4">
              <Card key={card.id} card={card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
