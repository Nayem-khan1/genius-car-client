import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { AiFillStar } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../../assets/icons/person1.png";
import img2 from "../../../assets/icons/person2.png";
import img3 from "../../../assets/icons/person1.png";
import img4 from "../../../assets/icons/person2.png";
import quat from "../../../assets/icons/quote.png";
import TeamMeetBtn from "../TeamMeet/TeamMeetBtn/TeamMeetBtn";

const CustomerSays = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div className="mb-24">
      <div className="text-center mb-12 mt-24">
        <h3 className="text-xl font-bold text-[#FF3811] mb-5">Testimonial</h3>
        <h1 className="text-4xl font-bold mb-8">What Customer Says</h1>
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
            <SwiperSlide>
              <div className="px-8 py-4">
                <div className="flex justify-center ">
                  <div className="mr-5">
                    <img src={image} alt="" />
                  </div>
                  <div className="mr-10">
                    <h3>Awlad Hossain</h3>
                    <p>Businessman</p>
                  </div>
                  <img
                    className="w-[56px] bg-[rgba(255, 56, 17, 0.2)]"
                    src={quat}
                    alt=""
                  />
                </div>
                <div className="mt-10">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.{" "}
                  </p>
                </div>

                <div className="flex justify-center text-[#FF912C] mt-10">
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
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

export default CustomerSays;
