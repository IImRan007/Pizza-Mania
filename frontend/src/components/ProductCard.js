import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="p-4 mb-8">
      <div>
        <p className="font-bold text-[2rem]">Products</p>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
          <figure>
            <img
              src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Paneer Pizza
              <div className="badge badge-secondary">VEG</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$1.6</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <div className="card-actions justify-start">
              <Link to={`/pizza/${1}`}>
                <button className="btn btn-primary bg-[#00008b]">
                  View PRoduct
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
          <figure>
            <img
              src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Chicken Pizza
              <div className="badge badge-secondary">NON-VEG</div>
            </h2>
            <p>No need to light a night-light on a light night like tonight.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$2.5</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <div className="card-actions justify-start">
              <Link to={`/pizza/${2}`}>
                <button className="btn btn-primary bg-[#00008b]">
                  View PRoduct
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
          <figure>
            <img
              src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Mushroom Pizza
              <div className="badge badge-secondary">VEG</div>
            </h2>
            <p>
              I thought a thought. But the thought I thought wasn't the thought
              I thought I thought. If the thought I thought I thought had been
              the thought I thought, I wouldn't have thought I thought.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$1.2</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <div className="card-actions justify-start">
              <button className="btn btn-primary bg-[#00008b]">
                View PRoduct
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
          <figure>
            <img
              src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Butter Chicken Pizza
              <div className="badge badge-secondary">NON-VEG</div>
            </h2>
            <p>
              Peter Piper picked a peck of pickled peppers. How many pickled
              peppers did Peter Piper pick?
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$3</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <div className="card-actions justify-start">
              <button className="btn btn-primary bg-[#00008b]">
                View PRoduct
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
          <figure>
            <img
              src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Onion Pizza
              <div className="badge badge-secondary">VEG</div>
            </h2>
            <p>
              If you must cross a course cross cow across a crowded cow
              crossing, cross the cross coarse cow across the crowded cow
              crossing carefully.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">$1.5</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <div className="card-actions justify-start">
              <button className="btn btn-primary bg-[#00008b]">
                View PRoduct
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
