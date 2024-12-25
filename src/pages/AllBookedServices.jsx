import background from "../assets/allservicesBackground.png";
import courseIcon from "../assets/allServiceIcon.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import BookedCard from "../components/BookedCard/BookedCard";
import PageTitle from "../components/shared/PageTitle";

const AllBookedServices = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllServices = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/bookedServices/${user?.email}`
      );
      setServices(data);
    };
    fetchAllServices();
  }, [user]);

  return (
    <section>
      <PageTitle title={`Learn Link | Booked Services`} />
      {/* header part */}
      <div
        className="h-[200px] md:h-[300px] lg:h-[450px] bg-no-repeat bg-cover  bg-bottom overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="w-1/2 md:w-3/5 space-y-1 md:space-y-3">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-semibold text-primary font-poppins">
              Booked Courses
            </h3>
            <p className="text-xs text-primary md:text-base">
              Discover courses for every skill level and interest. Find the
              perfect one to achieve your goals.
            </p>
          </div>
          <div className="w-1/2 md:w-2/5">
            <img
              className="w-full h-full object-cover"
              src={courseIcon}
              alt="courses"
            />
          </div>
        </div>
      </div>

      {/* all services container */}
      <div className="w-11/12 mx-auto py-12">
        <h3 className="text-xl md:text-3xl font-poppins font-medium my-8 pl-4 border-l-4 border-secondary">
          Total Booked Course: {services.length}
        </h3>
        <div className="space-y-5 md:space-y-8 my-12">
          {services.map((service) => (
            <BookedCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBookedServices;
