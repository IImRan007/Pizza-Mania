import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user/UserContext";
import { register } from "../context/user/UserActions";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
      if (password !== password2) {
        toast.error("Passwords didn't match");
        return;
      }

      const userData = { name, email, password };

      const data = await register(userData);
      dispatch({ type: "REGISTER_USER", payload: data });

      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="p-8 mb-32">
      <h1 className="font-bold text-2xl md:text-center">Register</h1>
      <form className="mt-8 md:mt-16" onSubmit={handleSubmit}>
        <div className="flex flex-col md:items-center gap-y-[0.5rem]">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="name"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs sm:max-w-[30rem]"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="input input-bordered w-full max-w-xs sm:max-w-[30rem]"
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
            className="input input-bordered w-full max-w-xs sm:max-w-[30rem]"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-8 md:items-center gap-y-[0.5rem]">
          <label htmlFor="password2" className="font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="input input-bordered w-full max-w-xs sm:max-w-[30rem]"
            id="password2"
            name="password2"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-8 md:text-center">
          <button className="btn md:btn-md">Register</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
