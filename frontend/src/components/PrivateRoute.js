import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user/UserContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(UserContext);

  if (state.user) return children;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
