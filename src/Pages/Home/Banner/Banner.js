import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import "./Banner.css";

import { Navigation } from "swiper";
import SwiperNavButton from "./SwiperNavButton/SwiperNavButton";
const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-h-[600px] rounded-lg"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="relative">
            <div className="carousel-img ">
              <img className="h-full w-full " src={image} alt="" />
            </div>
            <div className="absolute top-[10%] left-24">
              <h1 className="text-6xl font-bold text-white mb-8">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-lg text-white">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
            </div>
            <div className="absolute top-1/2 left-24 flex">
              <button className="bg-[#FF3811] px-8 py-2 mr-5 text-lg font-semibold text-white rounded">
                Discover More
              </button>
              <button className="border px-8 py-2 mr-5 text-lg font-semibold text-white rounded">
                Latest Project
              </button>
            </div>
          </SwiperSlide>
        ))}

        <SwiperNavButton></SwiperNavButton>
      </Swiper>
    </div>
  );
};

export default Banner;
