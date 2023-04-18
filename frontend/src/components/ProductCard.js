import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const ProductCard = ({ products }) => {
  if (!products) {
    return <Spinner />;
  }

  return (
    <div className="p-4 mb-12">
      <div>
        <p className="font-bold text-[2rem]">Products</p>
      </div>
      <div className="flex flex-wrap gap-8">
        {products &&
          products.map((item) => (
            <div
              className="card w-96 bg-base-100 shadow-xl mt-8"
              key={item._id}
            >
              <figure>
                <img src={item.imgFile.secure_url} alt="product" />
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
