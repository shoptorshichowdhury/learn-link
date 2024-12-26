import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Slide from "../Slide/Slide";

//banner images
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Carousel = () => {
  return (
    <div>
      <Swiper
        style={{
          //   "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#11245A",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Slide
            banner={banner1}
            title={`Unlock Your Potential`}
            description={`Discover top-notch courses and resources designed to help you excel in your learning journey`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner={banner2}
            title={`Learn. Share. Grow.`}
            description={`Connect with experts and peers to exchange knowledge and grow your skills effortlessly`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            banner={banner3}
            title={`Your Learning Hub`}
            description={`Access a world of educational services tailored to your goals, anytime, anywhere`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
