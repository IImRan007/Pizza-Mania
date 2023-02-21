import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function ImageSLider() {
  return (
    <div style={{ padding: "1rem" }}>
      <p className="exploreHeading">Recommended</p>

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        <SwiperSlide key={1}>
          <div
            style={{
              background: `url("https://i.ibb.co/bJ6tKqh/stretched-1920-1080-888979.jpg") center no-repeat`,
              backgroundSize: "cover",
            }}
            className="swiperSlideDiv"
          >
            <p className="swiperSlideText">NAME</p>
            <p className="swiperSlidePrice">$2.5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div
            style={{
              background: `url("https://i.ibb.co/0s8WpSn/mahyar-motebassem-p-GA4z-Hvpo5-E-unsplash.jpg") center no-repeat`,
              backgroundSize: "cover",
            }}
            className="swiperSlideDiv"
          >
            <p className="swiperSlideText">NAME</p>
            <p className="swiperSlidePrice">$2.5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div
            style={{
              background: `url("https://i.ibb.co/0s8WpSn/mahyar-motebassem-p-GA4z-Hvpo5-E-unsplash.jpg") center no-repeat`,
              backgroundSize: "cover",
            }}
            className="swiperSlideDiv"
          >
            <p className="swiperSlideText">NAME</p>
            <p className="swiperSlidePrice">$2.5</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSLider;
