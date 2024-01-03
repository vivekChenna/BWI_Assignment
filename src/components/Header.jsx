import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../assets/Images/shopping-icon.png";

const Header = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  useEffect(() => {
    userToken();
  }, []);

  const userToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      setToken(token);
      navigate("/products");
    }
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
          />
        </div>
      ) : null}
      {token ? <div>Cart</div> : null}
      {token ? <button className=" text-xl font-bold text-white ">Sign Out</button> : null}
    </div>
  );
};

export default Header;
