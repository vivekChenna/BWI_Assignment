import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../assets/Images/shopping-icon.png";
import { FaCartShopping } from "react-icons/fa6";
import { cartState } from "../context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const {
    state: { products },
  } = cartState();

  useEffect(() => {
    validUserToken();
  }, []);

  const validUserToken = () => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      navigate("/products");
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
          ? " absolute top-0  h-20 w-full flex items-center justify-around bg-yellow-600 p-2"
          : "absolute top-0  h-20 w-full flex items-center bg-yellow-600 p-2"
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
            value={inputSearch}
          />
        </div>
      ) : null}
      {token ? (
        <div className=" cursor-pointer" onClick={() => navigate("/cart")}>
          <FaCartShopping fontSize="1.75rem" color="white" />
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
