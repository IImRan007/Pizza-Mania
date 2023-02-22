import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Pizza Mania
        </Link>
      </div>
      <div className="flex-none gap-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered text-black"
          />
        </div>
        <Link to="/cart">
          <button className="btn hover:bg-white hover:text-black bg-white text-black">
            <FaShoppingCart
              fill="#000000"
              className="cursor-pointer h-[27px] w-[27px]"
            />
            &nbsp; My Cart
          </button>
        </Link>
        <div className="dropdown dropdown-end text-black">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://i.ibb.co/QYwqmfz/e25c785df467f375194d85617b3f7128.png"
                alt="profile"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between" to="/profile">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;