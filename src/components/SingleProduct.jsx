import React from "react";

const SingleProduct = ({ productData }) => {
  return (
    <div className=" border border-black w-80 rounded-lg p-2">
      <div className={`bg-cover bg-center`}>
        <img
          src={productData?.thumbnail}
          alt="img"
          className=" h-52 w-full"
        />
      </div>
      <p>{productData?.title}</p>
      <p>{productData?.brand}</p>
      <p>{productData?.price}</p>
      <button className=" rounded-md bg-green-400 p-1 text-white font-semibold">Add To Cart</button>
    </div>
  );
};

export default SingleProduct;
