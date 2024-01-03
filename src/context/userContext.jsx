import { createContext, useEffect, useReducer, useContext } from "react";

const cartContext = createContext();

// we have to make an provider in which we provide data to whole app

const initialState = {
  products: null,
  cart: [],
};

const actionTypes = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case actionTypes.FETCH_ERROR: {
      return {
        ...state,
        products: null,
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: actionTypes.FETCH_ERROR, payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;

export const cartState = () => {
  return useContext(cartContext);
};
