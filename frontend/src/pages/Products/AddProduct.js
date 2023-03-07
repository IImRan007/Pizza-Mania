import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/user/UserContext";
import { ProductContext } from "../../context/product/ProductContext";
import { createProduct } from "../../context/product/ProductActions";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 50,
  });
  const [imgFile, setImgFile] = useState(null);
  const [type, setType] = useState("veg");

  const { name, description, price } = formData;

  const { state } = useContext(UserContext);
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("imgFile", imgFile);
      formData.append("type", type);

      const response = await createProduct(formData, state.user.token);
      console.log({ response });
      dispatch({ type: "CREATE_PRODUCT", payload: response });
      // navigate("/");
      toast.success("Product Added Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl sm:text-center">Add Product:</h1>
      <form
        className="mt-8 md:mt-16"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="flex flex-col md:items-center gap-y-[0.5rem]">
          <label htmlFor="name" className="font-bold">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter name of the product"
            className="input input-primary input-bordered w-full max-w-xs sm:max-w-[30rem]"
            id="name"
            name="name"
            value={name}
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
            id="description"
            name="description"
            onChange={handleChange}
            value={description}
            required
          ></textarea>
        </div>
        <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
          <label htmlFor="type" className="font-bold">
            Type
          </label>
          <select
            id="type"
            name="type"
            onChange={(e) => setType(e.target.value)}
            defaultValue="veg"
            className="select select-primary w-full max-w-xs sm:max-w-[30rem]"
            required
          >
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
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
            id="price"
            name="price"
            min={50}
            onChange={handleChange}
            value={price}
            required
          />
        </div>
        <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
          <label htmlFor="image" className="font-bold">
            Select Image
          </label>
          <input
            type="file"
            id="imgFile"
            name="imgFile"
            className="file-input file-input-bordered w-full max-w-xs sm:max-w-[30rem]"
            required
            onChange={onImageChange}
          />
        </div>
        <div className="mt-8 md:text-center mb-4">
          <button className="btn md:btn-md">Add Product</button>
          <Link to="/dashboard">
            <button className="btn md:btn-md ml-4">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
