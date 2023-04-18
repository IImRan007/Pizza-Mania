import { useContext, useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../context/product/ProductActions";
import { ProductContext } from "../context/product/ProductContext";
import ImageContainer from "../components/ImageContainer";
import Spinner from "../components/Spinner";

const Home = () => {
  const [products, setProducts] = useState(null);
  const { dispatchProduct } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      console.log(data);
      dispatchProduct({ type: "GET_PRODCUTS", payload: data });

      setProducts(data);
    };

    fetchProducts();
  }, [dispatchProduct]);

  if (!products) {
    return <Spinner />;
  }

  return (
    <div>
      {/* <ImageContainer /> */}
      <ImageSlider />
      <ProductCard products={products} />
    </div>
  );
};
export default Home;
