import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="mb-[12rem] p-4">
      <div>
        <h1 className="font-bold text-2xl">Cart Details:</h1>
      </div>
      <CartItem />
    </div>
  );
};
export default Cart;
