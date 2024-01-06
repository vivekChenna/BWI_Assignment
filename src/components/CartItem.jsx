import React from "react";
import { MdDelete } from "react-icons/md";
import { cartState } from "../context/userContext";

const CartItem = ({ title, thumbnail, id, description }) => {
  const { dispatch } = cartState();

  const HandleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const HandleSelectChange = (e) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: { id: id, qty: e.target.value },
    });
  };

  return (
    <div className=" flex border-2 rounded-lg w-[60vw] items-center gap-4 p-3">
      <div className=" w-56 bg-cover">
        <img src={thumbnail} alt="cart-item-img" className=" h-40" />
      </div>
      <p>{title}</p>
      <p className=" w-1/2">{description}</p>

      <label for="qty">Qty</label>
      <select
        name="qty"
        id="qty"
        onChange={HandleSelectChange}
        className=" w-14 border-2"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
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
