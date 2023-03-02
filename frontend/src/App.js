import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
// Pages
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Context
import { UserProvider } from "./context/user/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pizza/:id" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </UserProvider>
  );
};
export default App;
