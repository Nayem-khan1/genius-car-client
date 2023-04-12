import React from "react";
import banner from "../../assets/images/checkout/checkout.png";
import "./CheckOut.css";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const data = useLoaderData();
  const { title, price } = data;
  console.log(data);
  return (
    <div className="">
      <div className="">
        <div className="relative ">
          <div className="overlay">
            <img className="w-full h-full " src={banner} alt="" />
          </div>
          <div className="absolute top-1/2 left-20">
            <h1 className="text-white text-5xl font-semibold">Check Out</h1>
          </div>
          <div className="absolute left-[42%] bottom-0">
            <button className="bg-[#FF3811] px-8 py-2 mr-5 text-lg  text-white rounded-t-3xl">
              Home/Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
        <p className="text-xl font-bold text-[#FF3811] text-center">
          Price: ${price}
        </p>
      </div>
      <div className="bg-[#F3F3F3] mt-24 rounded-lg mb-24">
        <div className="max-w-[940px] mx-auto py-24">
          <div>
            <input
              className="w-[460px] mr-[20px]  pl-8 py-4 rounded-lg"
              type="text"
              placeholder="First Name"
            />
            <input
              className="w-[460px]   pl-8 py-4 rounded-lg"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mt-6">
            <input
              type="text"
              className="w-[460px] mr-[20px]  pl-8 py-4 rounded-lg"
              name=""
              id=""
              placeholder="Your Phone"
            />
            <input
              type="email"
              className="w-[460px] pl-8 py-4 rounded-lg"
              name=""
              id=""
              placeholder="Your Email"
            />
          </div>
          <div className="mt-6">
            <textarea
              className="p-7 rounded-lg w-full"
              name=""
              id=""
              cols=""
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="mt-6">
            <button className="bg-[#FF3811] w-full py-2 mr-5 text-lg font-semibold text-white rounded">
              Order Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
