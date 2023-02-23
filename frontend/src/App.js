import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </>
  );
};
export default App;
