import React from "react";
import next from "../../../../assets/icons/next.png";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="card-actions justify-end">
          <p className="text-xl font-semibold text-[#FF3811] ">
            Price: {price}
          </p>
          <Link to={`services/${_id}`}>
            <button className="btn bg-[#FF3811] border-none">
              <img src={next} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
