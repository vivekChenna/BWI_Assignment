import React from "react";
import { cartState } from "../context/userContext";
import CartItem from "./CartItem";

const CartList = () => {
  const {
    state: { cart },
  } = cartState();

  return (
    <div className="ml-3 flex flex-col gap-4">
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CartList;
