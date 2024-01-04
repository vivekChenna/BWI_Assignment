import { cartState } from "../context/userContext";
import SingleProduct from "./SingleProduct";

const ProductsList = () => {
  const {
    state: { products },
  } = cartState();


  return !products ? null : (
    <div className=" mt-28 w-[70%] flex flex-wrap gap-10">
      {products?.products.map((productData) => {
        return <SingleProduct key={productData.id} productData={productData} />;
      })}
    </div>
  );
};

export default ProductsList;
