import { FaArrowRight, FaBook } from "react-icons/fa6";
import PopularServiceCard from "../PopularServiceCard/PopularServiceCard";
import { Link } from "react-router-dom";

const PopularServices = () => {
  return (
    <div className="w-11/12 mx-auto py-10 md:py-40 space-y-5 md:space-y-14">
      {/* top section */}
      <div className="flex justify-between items-end">
        <div className="space-y-2 md:space-y-4">
          <div className="flex gap-1 md:gap-3 items-center">
            <FaBook className="text-secondary text-sm"></FaBook>
            <p className="uppercase tracking-widest font-poppins font-bold text-secondary text-xs md:text-sm">
              Course
            </p>
          </div>
          <h3 className="text-xl md:text-4xl font-poppins text-primary font-semibold">
            Popular Courses
          </h3>
        </div>
        {/* view all button */}
        <Link to={`/allServices`}>
          <button className="btn bg-primary text-secondary hover:bg-transparent hover:text-primary border-transparent hover:border-primary md:text-base text-sm">
            View All <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>

      {/* popular course container  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PopularServiceCard />
        <PopularServiceCard />
        <PopularServiceCard />
        <PopularServiceCard />
        <PopularServiceCard />
        <PopularServiceCard />
      </div>
    </div>
  );
};

export default PopularServices;
