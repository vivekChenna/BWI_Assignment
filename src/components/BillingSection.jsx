import React, { useState, useEffect } from "react";
import { cartState } from "../context/userContext";

const BillingSection = () => {
  const [total, setTotal] = useState(0);

  const {
    state: { cart },
  } = cartState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        acc = acc + Number(curr.price) * curr.qty;
        return acc;
      }, 0)
    );
  }, [cart]);

  return (
    <div className=" sticky top-40 border border-black w-[30vw] h-[50vh] text-center p-2 rounded-lg">
      <h1 className=" text-center text-3xl font-bold">
        SubTotal <span className=" font-semibold">{cart.length}</span> items
      </h1>
      <p className="mt-2 font-semibold">Total ₹{total} rupees</p>
    </div>
  );
};

export default BillingSection;
