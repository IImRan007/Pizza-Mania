import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getAllProducts } from "../context/product/ProductActions";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function ImageSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <p className="exploreHeading text-[2rem] mb-4 p-4 text-black">
        RECOMMENDED PIZZA's 😍
      </p>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {products &&
          products.map((product) => (
            <SwiperSlide key={product._id}>
              <Link to={`/pizza/${product._id}`}>
                <div className="swiperSlideDiv">
                  <img
                    className="swiperSlideDiv object-cover"
                    src={product.imgFile.secure_url}
                    alt="Shoes"
                  />
                  <p className="swiperSlideText">{product.name}</p>
                  <p className="swiperSlidePrice">₹{product.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
