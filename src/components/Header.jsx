import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../assets/Images/shopping-icon.png";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { cartState } from "../context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const location = useLocation();

  const {
    state: { cart },
  } = cartState();

  useEffect(() => {
    validUserToken();
  }, []);

  const validUserToken = () => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));

      if (location.pathname === "/cart") {
        navigate("/cart");
      } else {
        navigate("/products");
      }
    } else {
      navigate("/");
    }
  };

  const HandleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const HandleInputChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div
      className={
        token
          ? " sticky top-0  h-20 w-full flex items-center justify-around bg-yellow-600 p-2"
          : "sticky top-0  h-20 w-full flex items-center bg-yellow-600 p-2"
      }
    >
      <img
        src={AppLogo}
        alt="app-logo"
        className=" w-12 ml-10  cursor-pointer"
      />
      {token ? (
        <div className=" w-96">
          <input
            type="text"
            placeholder="Search..."
            className=" w-full p-2 outline-none rounded-lg"
            onChange={HandleInputChange}
          />
        </div>
      ) : null}
      {token ? (
        <div className=" cursor-pointer flex relative" onClick={() => navigate("/cart")}>
          <FaCartShopping fontSize="2rem" color="white" />
          <p className=" absolute -mt-3 left-3 text-xl text-green-800 font-semibold">{cart.length}</p>
        </div>
      ) : null}
      {token ? (
        <button
          className=" text-xl font-bold text-white "
          onClick={HandleSignOut}
        >
          Sign Out
        </button>
      ) : null}
    </div>
  );
};

export default Header;
