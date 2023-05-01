import { useContext, useEffect, useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  getAllProducts,
} from "../context/product/ProductActions";
import { ProductContext } from "../context/product/ProductContext";
import { UserContext } from "../context/user/UserContext";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const [products, setProducts] = useState(null);
  const { dispatchProduct } = useContext(ProductContext);
  const { state } = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      console.log(data);
      dispatchProduct({ type: "GET_PRODCUTS" });
      // console.log(data);

      setProducts(data);
    };

    fetchProducts();
  }, [dispatchProduct]);

  const handleDelete = async (id) => {
    console.log(id, state.user.token);
    await deleteProduct(id, state.user.token);
    dispatchProduct({ type: "DELETE_PRODUCT" });

    const data = await getAllProducts();
    dispatchProduct({ type: "GET_PRODCUTS", payload: data });
    setProducts(data);

    toast.success("Product Deleted Successfully");
  };

  if (!products) {
    return <Spinner />;
  }

  return (
    <div className="mb-[10rem] p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <Link to="/">
          <button className="btn hover:bg-[#000000d6] bg-black text-white">
            Go Back
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full mt-[3rem]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.imgFile.secure_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.description}
                    <br />
                    <span className="badge badge-ghost badge-sm capitalize">
                      {item.type}
                    </span>
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <Link to={`/edit-product/${item._id}`}>
                      <button
                        className="btn btn-ghost btn-xs"
                        data-te-toggle="tooltip"
                        data-te-placement="bottom"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        title="Edit"
                      >
                        <FaRegEdit className="h-[18px] w-[18px]" />
                      </button>
                    </Link>
                    <button
                      htmlFor="my-modal"
                      className="btn btn-ghost btn-xs ml-[0.5rem]"
                      data-te-toggle="tooltip"
                      data-te-placement="bottom"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      title="Delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash className="h-[18px] w-[18px]" />
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/add-product">
          <button className="btn hover:bg-[#000000d6] bg-black text-white mt-8">
            Add Products
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
