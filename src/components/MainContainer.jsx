import Header from "./Header";
import { cartState } from "../context/userContext.jsx";
import FilterSection from "./FilterSection.jsx";
import ProductsList from "./ProductsList.jsx";

const MainContainer = () => {
  const { state, dispatch } = cartState();


  return (
    <div className=" mb-4">
      <Header />
      <div className=" flex gap-20">
        <FilterSection />
        <ProductsList />
      </div>
    </div>
  );
};

export default MainContainer;
