import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import next from "../../../../assets/icons/next.png";
import prev from "../../../../assets/icons/prev.png";
const TeamMeetBtn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const swiper = useSwiper();

  return (
    <div className="">
      <div className="  ">
        <button
          className="mr-5 bg-black px-4 py-4 rounded-full absolute top-1/3 left-5  z-10"
          onClick={() => swiper.slidePrev()}
        >
          <img src={prev} alt="" />
        </button>
        <button
          className={`bg-[#FF3811] px-4 py-4 rounded-full absolute top-1/3 right-5 z-10`}
          onClick={() => swiper.slideNext()}
        >
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TeamMeetBtn;
