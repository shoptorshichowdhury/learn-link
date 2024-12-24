import { FaArrowRight, FaBook } from "react-icons/fa6";
import PopularServiceCard from "../PopularServiceCard/PopularServiceCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAllServices = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/popularServices`
      );
      setServices(data);
    };
    fetchAllServices();
  }, []);

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
          <button className="btn bg-secondary text-primary hover:bg-transparent hover:text-primary border-transparent hover:border-primary md:text-base text-sm">
            Show All <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>

      {/* popular course container  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {services.map((service) => (
          <PopularServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
