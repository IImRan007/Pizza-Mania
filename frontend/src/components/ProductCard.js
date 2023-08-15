import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { useState } from "react";

const ProductCard = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  if (!products) {
    return <Spinner />;
  }

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mb-12">
      <div>
        <p className="font-bold text-black text-[2rem]">OUR PIZZA's</p>
      </div>
      <div className="mt-4 mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered input-info w-full max-w-2xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {products &&
          filteredProducts.map((item) => (
            <div
              className="card imgCard cursor-pointer w-96 bg-base-100 hover:shadow-xl mt-8"
              key={item._id}
            >
              <figure>
                <img
                  className="max-w-36 img max-h-52"
                  src={item.imgFile.secure_url}
                  alt="product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary capitalize">
                    {item.type}
                  </div>
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline font-bold">
                    ₹{item.price}
                  </div>
                </div>
                <div className="card-actions justify-start">
                  <Link to={`/pizza/${item._id}`}>
                    <button className="btn btn-primary bg-[#00008b]">
                      View PRoduct
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProductCard;
