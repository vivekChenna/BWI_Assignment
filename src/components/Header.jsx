import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../assets/Images/shopping-icon.png";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    userToken();
  }, []);

  const userToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      navigate("/products");
    }
  };

  return (
    <div className=" absolute top-0  h-16 w-full flex items-center">
      <img src={AppLogo} alt="app-logo" className=" w-12 ml-10  cursor-pointer" />
    </div>
  );
};

export default Header;
