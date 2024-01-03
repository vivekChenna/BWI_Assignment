import Header from "./Header";
import { cartState } from "../context/userContext.jsx";

const MainContainer = () => {
  const { state, dispatch } = cartState();

  console.log(state.products);

  return (
    <div>
      <Header />

      <div></div>
    </div>
  );
};

export default MainContainer;
