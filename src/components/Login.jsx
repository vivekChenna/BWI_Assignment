import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import BgImg from "../assets/Images/black-friday-elements-assortment.jpg";
import Header from "./Header";

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
  });

  const navigate = useNavigate();

  const HandleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandleSubmission = async () => {
    if (!formData.fullName || !formData.password) {
      return;
    } else {
      let response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.fullName,
          password: formData.password,
        }),
      });

      let data = await response.json();

      localStorage.setItem("token", data.token);
      navigate("/products");
    }
  };

  return (
    <div>
      <Header />
      <img src={BgImg} alt="bg-img" className=" h-screen w-screen top-0 absolute -z-10" />

      <div className=" absolute top-28 left-28 z-10 w-96 bg-green-600 bg-opacity-40 pt-14 h-96 rounded-xl">
        <h1 className=" text-center text-3xl font-bold">
          Enter Your Login Details
        </h1>
        <form
          className="flex flex-col gap-8 pt-6 p-7 text-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Enter Name kminchelle"
            className="p-2 outline-none rounded-lg"
            value={formData.fullName}
            onChange={HandleInputChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter Password 0lelplR"
            className="p-2 outline-none rounded-lg"
            value={formData.password}
            onChange={HandleInputChange}
          />
          <button
            className=" bg-yellow-400 w-max text-black text-xl font-semibold p-2 rounded-xl active:scale-[0.8]
          "
            onClick={HandleSubmission}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
