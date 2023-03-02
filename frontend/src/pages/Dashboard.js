import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <Link to="/edit-product/:productId">
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
                  className="btn btn-ghost btn-xs ml-[0.5rem]"
                  data-te-toggle="tooltip"
                  data-te-placement="bottom"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  title="Delete"
                >
                  <FaTrash className="h-[18px] w-[18px]" />
                </button>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
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
                <button
                  className="btn btn-ghost btn-xs ml-[0.5rem]"
                  data-te-toggle="tooltip"
                  data-te-placement="bottom"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  title="Delete"
                >
                  <FaTrash className="h-[18px] w-[18px]" />
                </button>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
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
                <button
                  className="btn btn-ghost btn-xs ml-[0.5rem]"
                  data-te-toggle="tooltip"
                  data-te-placement="bottom"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  title="Delete"
                >
                  <FaTrash className="h-[18px] w-[18px]" />
                </button>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
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
                <button
                  className="btn btn-ghost btn-xs ml-[0.5rem]"
                  data-te-toggle="tooltip"
                  data-te-placement="bottom"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  title="Delete"
                >
                  <FaTrash className="h-[18px] w-[18px]" />
                </button>
              </th>
            </tr>
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
