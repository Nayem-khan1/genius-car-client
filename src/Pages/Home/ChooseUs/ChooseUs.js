import React from "react";
import person from "../../../assets/icons/person.svg";
import img2 from "../../../assets/icons/group.svg";
import img3 from "../../../assets/icons/check.svg";
import delivery from "../../../assets/icons/deliveryt.svg";
import guranty from "../../../assets/icons/Wrench.svg";
import time from "../../../assets/icons/img4.svg";

const ChooseUs = () => {
  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-[#FF3811] mb-5">Core Features</h3>
        <h1 className="text-4xl font-bold mb-8">Why Choose Us</h1>
        <p className=" text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="border p-4 rounded-lg">
          <img className="px-4" src={img2} alt="" />
          <p className="mt-2">Expert Team</p>
        </div>
        <div className="border p-4 rounded-lg bg-[#FF3811]">
          <img className="px-7" src={time} alt="" />
          <p className="mt-3 text-white">Timely Delivery</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img className="px-5" src={person} alt="" />
          <p className="mt-2">24/7 support</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img className="px-4" src={guranty} alt="" />
          <p className="mt-2">Best Equipment</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img className="px-5" src={img3} alt="" />
          <p className="mt-2">100% Guarantee</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img className="px-4" src={delivery} alt="" />
          <p className="mt-2">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
