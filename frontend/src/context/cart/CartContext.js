import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    items: [],
    product: {},
    error: false,
    success: false,
    loading: false,
    message: "",
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, dispatchCart: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
