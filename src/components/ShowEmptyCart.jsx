import React from "react";
import { useNavigate } from "react-router-dom";

const ShowEmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className=" h-[70vh] w-full flex flex-col gap-10 items-center justify-center">
      <p className=" text-6xl">Cart is Empty!</p>
      <button
        className=" text-xl p-2 bg-green-600 text-white font-semibold active:scale-[0.85]"
        onClick={() => navigate("/products")}
      >
        Shop Now
      </button>
    </div>
  );
};

export default ShowEmptyCart;
