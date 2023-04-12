import React from "react";
import img from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero  py-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img src={img} className=" w-4/5 rounded-lg shadow-2xl" alt="" />
            <img
              src={parts}
              className="w-3/5 rounded-lg shadow-2xl absolute top-1/3 right-12 border-8 border-white"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h2>
            <h1 className="text-4xl font-bold mb-8">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className=" mb-8 text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
              <br />
              <br />
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="bg-[#FF3811] px-8 py-2 mr-5 text-lg font-semibold text-white rounded">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
