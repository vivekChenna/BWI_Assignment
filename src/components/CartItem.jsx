import React from "react";
import { MdDelete } from "react-icons/md";
import { cartState } from "../context/userContext";

const CartItem = ({ title, thumbnail, id }) => {
  const { dispatch } = cartState();

  const HandleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className=" flex border-2 w-[60vw] items-center gap-4 p-3">
      <div className=" w-56 bg-cover">
        <img src={thumbnail} alt="cart-item-img" className=" h-40" />
      </div>
      <p>{title}</p>
      <MdDelete
        fontSize="1.5rem"
        color="#D63031"
        className=" cursor-pointer"
        onClick={HandleRemoveFromCart}
      />
    </div>
  );
};

export default CartItem;
