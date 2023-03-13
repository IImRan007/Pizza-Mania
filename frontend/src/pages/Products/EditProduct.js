import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/product/ProductContext";
import {
  getProduct,
  updateProduct,
} from "../../context/product/ProductActions";
import { UserContext } from "../../context/user/UserContext";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [type, setType] = useState("");

  const { stateProduct, dispatchProduct } = useContext(ProductContext);
  const { state } = useContext(UserContext);

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatchProduct({ type: "SET_LOADING" });

    const fetchProduct = async () => {
      const data = await getProduct(productId);
      dispatchProduct({ type: "GET_PRODUCT", payload: data });
      setProduct(data);
    };

    fetchProduct();
  }, [dispatchProduct, productId]);

  console.log("PRODUCT", product);

  const { name, description, price } = product;

  const handleChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { name, description, type, price };
      const response = await updateProduct(productId, data, state.user.token);
      dispatchProduct({ type: "UPDATE_PRODUCT", payload: response });
      navigate("/dashboard");
      toast.success("Product Updated Successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  if (stateProduct.loading) {
    return <h1>Loading</h1>;
  } else if (product) {
    return (
      <div className="p-4">
        <h1 className="font-bold text-2xl sm:text-center">Edit Product:</h1>
        <form className="mt-8 md:mt-16" onSubmit={handleSubmit}>
          <div className="flex flex-col md:items-center gap-y-[0.5rem]">
            <label htmlFor="name" className="font-bold">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter name of the product"
              className="input input-primary input-bordered w-full max-w-xs sm:max-w-[30rem]"
              value={name}
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
            <label htmlFor="description" className="font-bold">
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              className="input input-primary input-bordered w-full max-w-xs sm:max-w-[30rem] h-[165px]"
              value={description}
              id="description"
              name="description"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
            <label htmlFor="type" className="font-bold">
              Type
            </label>
            <select
              onChange={(e) => setType(e.target.value)}
              defaultValue={product.type}
              className="select select-primary w-full max-w-xs sm:max-w-[30rem]"
            >
              <option id="veg" value="veg">
                Veg
              </option>
              <option id="non-veg" value="non-veg">
                Non-Veg
              </option>
            </select>
          </div>
          <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
            <label htmlFor="price" className="font-bold">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="input input-primary input-bordered w-full max-w-xs sm:max-w-[30rem]"
              value={price}
              id="price"
              name="price"
              min={50}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-8 md:text-center mb-4">
            <button className="btn md:btn-md">Edit Product</button>
            <Link to="/dashboard">
              <button className="btn md:btn-md ml-4">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
};
export default EditProduct;
