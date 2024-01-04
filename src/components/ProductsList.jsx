import { cartState } from "../context/userContext";
import SingleProduct from "./SingleProduct";

const ProductsList = () => {
  const {
    state: { products },
  } = cartState();

  console.log(products?.products);

  return !products ? null : (
    <div className=" mt-14 w-[70%] flex flex-wrap gap-10">
      {products?.products.map((productData) => {
        return <SingleProduct key={productData.id} productData={productData} />;
      })}
    </div>
  );
};

export default ProductsList;
