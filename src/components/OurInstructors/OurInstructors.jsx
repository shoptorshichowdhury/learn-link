import { FaArrowRight, FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import InstructorCard from "../InstructorCard/InstructorCard";

import teacher1 from "../../assets/instructor/teacher1.jpg";
import teacher2 from "../../assets/instructor/teacher2.jpg";
import teacher3 from "../../assets/instructor/teacher3.jpg";
import teacher4 from "../../assets/instructor/teacher4.jpg";
import { motion } from "motion/react";

const OurInstructors = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      {/* top section */}
      <div className="flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.1,
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-2 md:space-y-4"
        >
          <div className="flex gap-1 md:gap-3 items-center">
            <FaBook className="text-secondary text-sm"></FaBook>
            <p className="uppercase tracking-widest font-poppins font-bold text-secondary text-xs md:text-sm">
              Course Instructors
            </p>
          </div>
          <h3 className="text-xl md:text-4xl font-poppins text-primary font-semibold">
            Our Top Instructors
          </h3>
        </motion.div>
        {/* view all button */}
        <Link to={`/allServices`}>
          <button className="btn bg-secondary text-primary hover:bg-transparent hover:text-primary border-transparent hover:border-primary md:text-base text-sm">
            Find Courses <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>

      {/* category container */}
      <div className="h-[550px] my-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <InstructorCard
              image={teacher1}
              name={`John Smith`}
              course={`Full Stack Web Development`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InstructorCard
              image={teacher2}
              name={`Elina Smith`}
              course={`UI/UX Design`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InstructorCard
              image={teacher3}
              name={`Max Smith`}
              course={`Instagram Marketiing`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InstructorCard
              image={teacher4}
              name={`Rose Smith`}
              course={`Search Engine Optimization`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurInstructors;
