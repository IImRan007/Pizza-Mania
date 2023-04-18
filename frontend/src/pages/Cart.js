import { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { getCartItems } from "../context/cart/CartActions";
import { CartContext } from "../context/cart/CartContext";
import { UserContext } from "../context/user/UserContext";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { dispatchCart } = useContext(CartContext);
  const { state } = useContext(UserContext);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const products = await getCartItems(state.user.token);
      setProducts(products);
      dispatchCart({ type: "GET_ITEMS", payload: products });
    };

    fetchCartProducts();
  }, [dispatchCart, state.user.token]);

  return (
    <div className="mb-[12rem] p-4">
      <div>
        <h1 className="font-bold text-2xl">Cart Details:</h1>
      </div>
      <CartItem products={products} />
    </div>
  );
};
export default Cart;
