"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";

const MultipleItems = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel className=" h-[600px] px-8" responsive={responsive}>
        <div className="border border-y-sky-600 w-40 h-40"></div>
        <div className="border border-y-sky-600 w-40 h-40">Item 1</div>
        <div className="border border-y-sky-600 w-40 h-40">Item 1</div>
        <div className="border border-y-sky-600 w-40 h-40">Item 1</div>
        <div className="border border-y-sky-600 w-40 h-40">Item 1</div>
        <div className="border border-y-sky-600 w-40 h-40">Item 1</div>
        <div className="border border-y-sky-600 w-40 h-40">Item 1</div>
      </Carousel>
    </>
  );
};

export default MultipleItems;
