import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TeamMeetBtn from "./TeamMeetBtn/TeamMeetBtn";

const TeamMeet = () => {
  const images = [team1, team2, team3];

  return (
    <div className="mt-[150px] mb-10">
      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-[#FF3811] mb-5">Team</h3>
        <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
        <p className=" text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              {" "}
              <img className="rounded max-w-[341px]" src={image} alt="" />
              <div className="mt-5 ">
                <h3 className="text-center text-lg font-semibold">
                  Car engine Plug
                </h3>
                <p className="text-center">Engine Expert</p>
                <div className="flex justify-center mt-3">
                  <RiFacebookCircleFill className="text-[#395185] mr-2 text-2xl"></RiFacebookCircleFill>
                  <AiFillTwitterCircle className="text-[#55ACEE] mr-2 text-2xl"></AiFillTwitterCircle>
                  <AiFillLinkedin className="text-[#0A66C2] mr-2 text-2xl"></AiFillLinkedin>
                  <GrInstagram className="text-red-500  mr-2 text-2xl"></GrInstagram>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <TeamMeetBtn></TeamMeetBtn>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamMeet;
