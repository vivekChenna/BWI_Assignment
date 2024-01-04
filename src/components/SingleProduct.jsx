import React from "react";
import { cartState } from "../context/userContext";

const SingleProduct = ({ productData }) => {
  const {
    state: { cart },
    dispatch,
  } = cartState();

  const desc =
    productData?.description.length > 50
      ? `${productData?.description.substr(0, 50)}...`
      : productData?.description;

  const HandleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: productData });
  };

  const HandleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productData.id });
  };

  return (
    <div className="w-80 p-3 hover:shadow-xl h-96 border">
      <div className={`bg-cover bg-center`}>
        <img src={productData?.thumbnail} alt="img" className=" h-48 w-full" />
      </div>
      <p>{desc}</p>
      <div className=" flex gap-2 mt-1">
        <p className="font-semibold  ">₹{productData?.price}</p>
        <p className=" font-semibold">{productData?.title}</p>
      </div>
      <p className=" mt-1">In Stock {productData?.stock}</p>
      {cart.some((p) => p.id === productData.id) ? (
        <button
          className=" rounded-md bg-red-400 py-1 px-2 text-lg text-white font-semibold mt-2 active:scale-[0.8]"
          onClick={HandleRemoveFromCart}
        >
          Remove Item
        </button>
      ) : (
        <button
          className=" rounded-md bg-green-400 py-1 px-2 text-lg text-white font-semibold mt-2 active:scale-[0.8]"
          onClick={HandleAddToCart}
        >
          Add Item
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
