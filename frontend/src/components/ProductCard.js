import { Link } from "react-router-dom";
import { Buffer } from "buffer";

const ProductCard = ({ products }) => {
  return (
    <div className="p-4 mb-8">
      <div>
        <p className="font-bold text-[2rem]">Products</p>
      </div>
      <div className="flex justify-between flex-wrap">
        {products &&
          products.map((item) => (
            <div
              className="card w-96 bg-base-100 shadow-xl mt-8"
              key={item._id}
            >
              <figure>
                <img
                  src={`data:${item.imgFile.contentType};base64, ${Buffer.from(
                    item.imgFile.data
                  ).toString("base64")}`}
                  alt="Shoes"
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
                  <div className="badge badge-outline">₹{item.price}</div>
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
