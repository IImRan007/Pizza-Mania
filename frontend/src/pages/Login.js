import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user/UserContext";
import { login } from "../context/user/UserActions";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    dispatch({ type: "LOGIN_USER", payload: userData });

    await login(userData);
    navigate("/");
  };
  return (
    <div className="p-8 mb-[16rem]">
      <h1 className="font-bold text-2xl">Login</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex- flex-col">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="input input-bordered w-full max-w-xs"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex- flex-col mt-8">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-8">
          <button className="btn md:btn-md">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
