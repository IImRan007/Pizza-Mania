import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user/UserContext";
import { login } from "../context/user/UserActions";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };

      const response = await login(userData);
      dispatch({ type: "LOGIN_USER", payload: response });

      navigate("/");
      toast.success("Logged in Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="p-8 mb-[16rem]">
      <h1 className="font-bold text-2xl md:text-center">Login</h1>
      <form className="mt-8 md:mt-16" onSubmit={handleSubmit}>
        <div className="flex flex-col md:items-center gap-y-[0.5rem]">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="input input-bordered w-full max-w-xs sm:max-w-[30rem] input-primary"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs sm:max-w-[30rem] input-primary"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-8 md:text-center">
          <button className="btn md:btn-md">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
