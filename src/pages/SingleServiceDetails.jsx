import background from "../assets/allservicesBackground.png";
import detailsImg from "../assets/details.png";
import serviceImg from "../assets/serviceCardDemo.jpg";
import buyerImg from "../assets/banner/banner1.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/shared/PageTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";

const SingleServiceDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      const { data } = await axiosSecure.get(`/services/${id}`);
      setService(data);
    };
    fetchService();
  }, [id]);

  const { _id, image, name, price, area, description, serviceProvider } =
    service;

  return (
    <section>
      <PageTitle title={`Learn Link | Service Details`} />
      {/* header part */}
      <div className="h-[130px] md:h-[300px] overflow-hidden bg-secondary/20">
        <div className="w-11/12 mx-auto flex items-center justify-between py-3 md:py-8">
          <div className="w-1/2 md:w-3/5 space-y-1 md:space-y-3">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-semibold text-primary font-poppins">
              Course Details
            </h3>
            <p className="text-xs text-primary md:text-base">
              Discover courses for every skill level and interest. Find the
              perfect one to achieve your goals.
            </p>
          </div>
          <div className="w-1/2 md:w-2/5">
            <img
              className="w-full h-full object-cover"
              src={detailsImg}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* course details container  */}
      <div className="w-11/12 mx-auto py-12">
        <div className="space-y-5">
          {/* details image */}
          <div className="overflow-hidden h-[200px] md:h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt="service-image"
            />
          </div>
          {/* details content */}
          <div className="space-y-5">
            <h3 className="text-xl md:text-4xl font-poppins text-primary font-semibold">
              {name}
            </h3>
            <p>{description}</p>
            <div className="flex items-center gap-5">
              <p className="text-primary font-medium">Course Provider:</p>
              <div className="flex items-center gap-5 bg-secondary/10 w-max px-2 md:px-4 py-1 rounded-lg">
                <div className="w-12 h-12 rounded-full">
                  <img
                    className="w-full h-full object-cover rounded-full border border-secondary"
                    src={serviceProvider?.photo}
                    alt="provider"
                  />
                </div>
                <p>{serviceProvider?.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-primary font-medium">Course Location:</p>
              <div>{area}</div>
            </div>
            <div className="flex items-center gap-10">
              <p className="text-primary font-bold text-lg">Price: ${price}</p>
              <Link to={`/bookService/${_id}`}>
                <button className="btn bg-primary text-secondary hover:bg-secondary hover:text-primary">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceDetails;
