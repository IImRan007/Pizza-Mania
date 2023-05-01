import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../context/product/ProductActions";
import { addItemToCart } from "../context/cart/CartActions";
import { CartContext } from "../context/cart/CartContext";
import { UserContext } from "../context/user/UserContext";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Product = () => {
  const [isCheeseEnabled, setIsCheeseEnabled] = useState(false);
  const [isToppingsEnabled, setIsToppingsEnabled] = useState(false);
  const [size, setSize] = useState("Regular");
  const [product, setProduct] = useState({});

  const { state } = useContext(UserContext);
  const { dispatchCart } = useContext(CartContext);

  const { id } = useParams();
  const navigate = useNavigate();

  let finalPrice = product.price;

  const handleCheeseChange = (e) => {
    setIsCheeseEnabled(e.target.checked);
  };

  const handleToppingsChange = (e) => {
    setIsToppingsEnabled(e.target.checked);
  };

  const handleSize = (e) => {
    console.log(e.target.value);
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

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(id);
      console.log(productData);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  const addItem = async () => {
    try {
      const data = {
        name: product.name,
        size: size,
        type: product.type,
        imgFile: product.imgFile.secure_url,
        price: finalPrice,
      };

      console.log({ data });

      const response = await addItemToCart(data, state.user.token);
      dispatchCart({ type: "ADD_CART", payload: response });
      // navigate("/cart");
      toast.success("Product Added Successfully");
    } catch (error) {
      navigate("/login");
      toast.error("Please login first");
    }
  };

  if (!product) {
    return <Spinner />;
  }

  return (
    <div className="p-4 items-center lg:flex md:justify-center lg:p-8 lg:justify-evenly mb-[14rem]">
      <div>
        <div>
          <h1 className="font-bold text-[23px]">
            {product && product.name} ({product.type})
          </h1>
        </div>
        <div className="mt-4">
          <img
            src={product.imgFile && product.imgFile.secure_url}
            alt="product"
            className="sm:max-w-[80%] md:max-w-[75%] lg:max-w-[84%] rounded-[18px] shadow-xl h-[40vh] object-cover"
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-[18px]">Details:</h2>
        <div className="mt-4">
          <p>{product && product.description}</p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-[18px]">Select Size:</p>
          <select
            onChange={handleSize}
            defaultValue="Regular"
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
          <button onClick={() => addItem()} className="btn bg-black text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
