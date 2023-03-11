import { Link } from "react-router-dom";

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
                  src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">VEG</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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
