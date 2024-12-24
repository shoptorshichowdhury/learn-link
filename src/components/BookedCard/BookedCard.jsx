import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const BookedCard = ({ service }) => {
  const {
    serviceId,
    serviceImage,
    serviceName,
    provider,
    user,
    bookedDate,
    instruction,
    price,
  } = service || {};
  return (
    <div>
      {service && (
        <div className="flex flex-col md:flex-row gap-3 border bg-secondary/10 rounded-lg shadow-md">
          {/* service image */}
          <div className="md:w-1/2 lg:w-2/5 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
              src={serviceImage}
              alt="service"
            />
          </div>

          {/* service text content */}
          <div className="md:w-1/2 lg:w-3/5 p-5 space-y-5 md:space-y-8">
            <div className="flex flex-col md:flex-row lg:items-center gap-5 lg:gap-8">
              <div className="px-4 py-1 bg-secondary/25 border border-secondary w-max text-sm rounded-3xl font-poppins font-medium text-primary">
                Booken in: {format(new Date(bookedDate), "P")}
              </div>
              <div className="text-primary font-poppins text-xl lg:text-2xl font-bold">
                Price: ${price}
              </div>
            </div>
            <div className="space-y-3 md:space-y-5">
              <h4 className="text-2xl text-primary font-semibold">
                {serviceName}
              </h4>

              <p className="text-sm md:text-base text-primary">Instruction: {instruction}</p>
            </div>
            {/* service provider details */}
            <div className="flex items-center gap-1 bg-secondary/10 w-max px-2 md:px-4 py-1 rounded-lg">
              <p>{provider?.name}</p>
              <div className="w-[3px] h-4 bg-primary mx-2"></div>
              <p>{provider?.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedCard;
