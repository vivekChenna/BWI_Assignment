import React from "react";
import { useNavigate } from "react-router-dom";
import { cartState } from "../context/userContext";
import Header from "./Header";
import CartList from "./CartList";
import ShowEmptyCart from "./ShowEmptyCart";
import BillingSection from "./BillingSection";

const CartPage = () => {
  const navigate = useNavigate();

  const {
    state: { cart },
  } = cartState();

  return (
    <div className=" mb-5">
      <Header />

      {cart.length === 0 ? (
        <ShowEmptyCart />
      ) : (
        <div className=" flex flex-col mt-4">
          <button
            className=" self-center rounded-sm bg-green-500 p-2 text-white text-lg font-semibold active:scale-[0.85]"
            onClick={() => navigate("/products")}
          >
            Shop More
          </button>
          <div className=" flex gap-10 mt-5">
            <CartList />
            <BillingSection />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
