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
// Products Page
import AddProduct from "./pages/Products/AddProduct";
import EditProduct from "./pages/Products/EditProduct";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Context
import { UserProvider } from "./context/user/UserContext";
import { ProductProvider } from "./context/product/ProductContext";
import { CartProvider } from "./context/cart/CartContext";

const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
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
                <Route
                  path="/add-product"
                  element={
                    <PrivateRoute>
                      <AddProduct />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/edit-product/:productId"
                  element={
                    <PrivateRoute>
                      <EditProduct />
                    </PrivateRoute>
                  }
                />
              </Routes>
              <Footer />
            </div>
          </Router>
          <ToastContainer />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};
export default App;
