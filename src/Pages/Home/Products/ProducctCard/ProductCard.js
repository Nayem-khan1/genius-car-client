import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { image, title, price, _id } = product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="w-[326px] h-[215px] p-8">
        <figure>
          <img className="max-w-[156px]" src={image} alt="Shoes" />
        </figure>
      </div>
      <div className="flex justify-center text-[#FF912C] ">
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
      </div>
      <div className="card-body">
        <h2 className="text-center text-xl font-semibold">{title}</h2>
        <p className="text-center font-semibold text-[#FF3811]">{price}</p>
        <div className="card-actions justify-end">
          <Link to={`products/${_id}`}>
            <button className="btn bg-[#FF3811] border-none">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
