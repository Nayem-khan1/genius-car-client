import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import next from "../../../../assets/icons/next.png";
import prev from "../../../../assets/icons/prev.png";
const SwiperNavButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const swiper = useSwiper();

  const handleClice = () => {};
  return (
    <div className=" absolute bottom-12 right-12 z-10">
      <button
        className="mr-5 bg-white/20  px-4 py-4 rounded-full"
        onClick={() => swiper.slidePrev()}
      >
        <img src={prev} alt="" />
      </button>
      <button
        className={`bg-[#FF3811] px-4 py-4 rounded-full`}
        onClick={() => swiper.slideNext()}
      >
        <img src={next} alt="" />
      </button>
    </div>
  );
};

export default SwiperNavButton;
