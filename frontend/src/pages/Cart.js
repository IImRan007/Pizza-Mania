import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const price = quantity * 200;

  const decrement = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "" || e.target.value === 0) {
      e.target.value = 1;
    }
    setQuantity(e.target.value);
  };

  const handleSubmit = () => {
    if (!quantity || quantity == 0) {
      toast.error("Quantity cannot be zero");
    }
  };

  return (
    <div className="mb-[6rem] p-4">
      <div>
        <h1 className="font-bold text-2xl">Cart Details:</h1>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-[1.5rem]">
        <figure>
          <img src="https://i.ibb.co/dgS5LKm/596343.jpg" alt="cart" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Product Name</h2>
          <h2 className="card-title">Price: ₹{price}</h2>
          <div className="card-actions flex-nowrap mt-4 gap-x-4">
            <div className="btn-group">
              <button className="btn bg-black text-white" onClick={decrement}>
                -
              </button>
              <input
                type="number"
                placeholder="Qty"
                min={1}
                value={quantity}
                className="input max-w-[5rem] font-bold"
                onChange={handleChange}
              />
              <button
                className="btn bg-black text-white"
                onClick={() => setQuantity(parseInt(quantity) + 1)}
              >
                +
              </button>
            </div>
            <Link to={`/buy-now`}>
              <button
                className="btn bg-black text-white"
                onClick={handleSubmit}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
