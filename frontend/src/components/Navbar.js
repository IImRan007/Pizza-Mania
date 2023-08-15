import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { UserContext } from "../context/user/UserContext";
import { logout } from "../context/user/UserActions";
import { toast } from "react-toastify";

const Navbar = () => {
  const { dispatch, state } = useContext(UserContext);

  console.log({ state });

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    dispatch({ type: "LOGOUT_USER" });
    navigate("/");
    toast.success("Logged out Successfully");
  };

  return (
    <div className="navbarContainer max-h[10rem] bg-black text-white sm:flex-row">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Pizza Mania
        </Link>
      </div>
      <div className="flex-none gap-4">
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered text-black"
          />
        </div> */}
        <div className="hidden sm:flex">
          <Link to="/cart">
            <button className="btn hover:bg-white hover:text-black bg-white text-black">
              <FaShoppingCart
                fill="#000000"
                className="cursor-pointer h-[27px] w-[27px]"
              />
              &nbsp; My Cart
            </button>
          </Link>
        </div>

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
            {state.user && (
              <>
                <li>
                  <Link className="justify-between" to="/cart">
                    Cart
                  </Link>
                </li>
                {state.user.isAdmin && (
                  <>
                    <hr />
                    <li>
                      <Link className="justify-between" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                  </>
                )}
                <hr />
                <li onClick={handleLogout}>
                  <Link>Logout {state.user && state.user.email}</Link>
                </li>
              </>
            )}
            {!state.user && (
              <>
                <li>
                  <Link className="justify-between" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="justify-between" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
