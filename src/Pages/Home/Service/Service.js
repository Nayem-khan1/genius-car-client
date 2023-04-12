import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

import time from "../../../assets/icons/time.png";
import location from "../../../assets/icons/location.png";
import phone from "../../../assets/icons/phone.png";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-[#FF3811] mb-5">Service</h3>
        <h1 className="text-4xl font-bold mb-8">Our Service Area</h1>
        <p className=" text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px]">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-8  ml-[40%]">
        <button className="font-semibold text-lg px-10 py-2 border border-[#FF3811]  text-[#FF3811] text-center rounded hover:bg-[#FF3811] hover:text-white ">
          More Services
        </button>
      </div>
      <div className="mt-28 mb-28 max-h-[250px] py-20 bg-black flex justify-evenly rounded-xl">
        <div className="flex items-center">
          <img className="w-[40px] h-[40px]" src={time} alt="" />
          <div className="ml-5">
            <p className="text-white font-medium">We are open monday-friday</p>
            <h3 className="text-white font-bold text-2xl">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex items-center">
          <img className="w-[40px] h-[40px]" src={phone} alt="" />
          <div className="ml-5">
            <p className="text-white font-medium">Have a question?</p>
            <h3 className="text-white font-bold text-2xl">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex items-center">
          <img className="w-[40px] h-[40px]" src={location} alt="" />
          <div className="ml-5">
            <p className="text-white font-medium">Need a repair? our address</p>
            <h3 className="text-white font-bold text-2xl">
              Liza Street, New York
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
