import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ price = 200 }) => {
  const [isCheeseEnabled, setIsCheeseEnabled] = useState(false);
  const [isToppingsEnabled, setIsToppingsEnabled] = useState(false);
  const [size, setSize] = useState("");

  let finalPrice = price;

  const handleCheeseChange = (e) => {
    setIsCheeseEnabled(e.target.checked);
  };

  const handleToppingsChange = (e) => {
    setIsToppingsEnabled(e.target.checked);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  if (size === "Medium") {
    finalPrice = finalPrice + 100;
  } else if (size === "Large") {
    finalPrice = finalPrice + 200;
  }

  if (isCheeseEnabled) {
    finalPrice = finalPrice + 50;
  }
  if (isToppingsEnabled) {
    finalPrice = finalPrice + 50;
  }

  return (
    <div className="p-4 items-center lg:flex md:justify-center lg:p-8 lg:justify-evenly mb-[14rem]">
      <div>
        <div>
          <h1 className="font-bold text-[23px]">Product name</h1>
        </div>
        <div className="mt-4">
          <img
            src="https://i.ibb.co/dgS5LKm/596343.jpg"
            alt="product"
            className="sm:max-w-[80%] md:max-w-[75%] lg:max-w-[84%] rounded-[18px] shadow-xl"
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-[18px]">Details:</h2>
        <div className="mt-4">
          <p>Classic delight with 100% real mozzarella cheese and paneer.</p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-[18px]">Select Size:</p>
          <select
            onChange={handleSize}
            defaultValue
            className="select select-primary w-full max-w-xs mt-4"
          >
            <option>Regular</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <h2 className="font-bold text-[18px] mt-4">Price: ₹{finalPrice}</h2>
        <div className="mt-6 flex items-center">
          <input
            id="extra-cheese"
            type="checkbox"
            className="checkbox"
            onChange={handleCheeseChange}
          />
          <label htmlFor="extra-cheese" className="mx-4 cursor-pointer">
            Add Extra Cheese for ₹50
          </label>
        </div>
        <div className="mt-6 flex items-center">
          <input
            id="extra-toppings"
            type="checkbox"
            className="checkbox"
            onChange={handleToppingsChange}
          />
          <label htmlFor="extra-toppings" className="mx-4 cursor-pointer">
            Add Extra Toppings for ₹50
          </label>
        </div>
        <div className="mt-8 flex items-center gap-x-8">
          <Link to={`/cart`}>
            <button className="btn bg-black text-white">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
