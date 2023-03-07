import { Link } from "react-router-dom";

const EditProduct = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
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
            onChange={handleChange}
            defaultValue
            className="select select-primary w-full max-w-xs sm:max-w-[30rem]"
          >
            <option>Veg</option>
            <option>Non-Veg</option>
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
};
export default EditProduct;
