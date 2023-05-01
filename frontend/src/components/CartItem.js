import { useLayoutEffect, useMemo, useState } from "react";
import displayRazorpay from "../utils/PaymentGateway";
import Item from "./Item";
import { deleteCartItem } from "../context/cart/CartActions";
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";
import { toast } from "react-toastify";

const initialProduct = (products) => {
  return products.map((product) => ({
    ...product,
    qty: 1,
  }));
};

const CartItem = ({ products }) => {
  console.log({ products });

  const [quantity, setQuantity] = useState([]);

  const { state } = useContext(UserContext);

  useLayoutEffect(() => {
    const allProducts = initialProduct(products);
    setQuantity(allProducts);
  }, [products]);

  const handleIncDec = (id, type) => {
    const filteredQty = quantity.map((qty) => {
      if (qty._id === id) {
        console.log("qty", qty.qty);
        let newQty = type === "inc" ? qty.qty + 1 : qty.qty - 1;
        console.log("newQty", newQty);
        return { ...qty, qty: newQty };
      } else {
        return qty;
      }
    });
    setQuantity(filteredQty);
  };

  const grandTotalPrice = useMemo(
    () => quantity.reduce((total, item) => total + item.qty * item.price, 0),
    [quantity]
  );

  if (quantity.length < 1) {
    return <h1>Seems, there are no items in your cart.</h1>;
  }

  const handleDeleteItem = async (id) => {
    const data = await deleteCartItem(id, state.user.token);
    const filteredQuantity = quantity.filter((q) => q._id !== id);
    setQuantity(filteredQuantity);
    console.log({ data });
    toast.success("Item removed successfully");
  };
  return (
    <>
      {quantity &&
        quantity.map((item) => (
          <Item
            item={item}
            key={item._id}
            handleIncDec={handleIncDec}
            handleDeleteItem={handleDeleteItem}
          />
        ))}

      {quantity && (
        <>
          <div className="mt-8 font-bold text-center">
            Sub Total: ₹{grandTotalPrice}
          </div>
          <div className="mt-8 text-center">
            <button
              className="btn dark:bg-gray-900 text-white"
              onClick={() =>
                displayRazorpay({
                  price: grandTotalPrice,
                })
              }
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default CartItem;
