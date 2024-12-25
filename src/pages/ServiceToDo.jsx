import { useContext, useEffect, useState } from "react";
import ServiceToDoCard from "../components/ServiceToDoCard/ServiceToDoCard";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import PageTitle from "../components/shared/PageTitle";
import background from "../assets/allservicesBackground.png";
import courseIcon from "../assets/allServiceIcon.png";

const ServiceToDo = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllServices = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/service-to-do/${user?.email}`
      );
      setServices(data);
    };
    fetchAllServices();
  }, [user]);

  return (
    <section>
      <PageTitle title={`Learn Link | Service To Do`} />
      {/* header part */}
      <div className="h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden bg-secondary/20">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="w-1/2 md:w-3/5 space-y-1 md:space-y-3">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-semibold text-primary font-poppins">
              Course to conduct
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

      {/* service to do container */}
      <div>
        {services.length !== 0 && (
          <div className="w-11/12 mx-auto py-12">
            <h3 className="text-xl md:text-3xl font-poppins font-medium my-8 pl-4 border-l-4 border-secondary">
              Total Course: {services.length}
            </h3>
            <div className="space-y-5 md:space-y-8 my-12">
              {services.map((service) => (
                <ServiceToDoCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        )}
        {services.length === 0 && (
          <p className="text-2xl md:text-5xl font-bold flex justify-center items-center min-h-[400px]">
            No Available service to do!
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceToDo;
