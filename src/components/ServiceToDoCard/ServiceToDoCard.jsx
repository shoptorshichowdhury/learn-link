import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";

const ServiceToDoCard = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    user,
    bookedDate,
    instruction,
    price,
    serviceStatus,
  } = service || {};

  //handle status change
  const handleStatusChange = async (e, id) => {
    const statusData = {
      serviceStatus: e.target.value,
    };

    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/service-to-do/${id}`,
        statusData
      );
      toast.success("Course Status update successfull!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      {service && (
        <div className="flex flex-col md:flex-row gap-3 bg-secondary/10 rounded-lg shadow-md">
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
              {/* service status */}
              <select
                onChange={(e) => handleStatusChange(e, _id)}
                defaultValue={serviceStatus || "Course Status"}
                className="select select-sm w-full max-w-40  border-accent/65 text-bgColor bg-accent"
              >
                <option disabled>Course Status</option>
                <option>Pending</option>
                <option>Working</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="space-y-3 md:space-y-5">
              <h4 className="text-2xl text-primary font-semibold">
                {serviceName}
              </h4>

              <p className="text-sm md:text-base text-primary">
                Instruction: {instruction}
              </p>
            </div>
            {/* service provider details */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 bg-secondary/10 w-max px-3 md:px-4 py-1 rounded-lg">
              <p className="font-medium">Student:</p>
              <p>{user?.name}</p>
              <div className="w-[3px] h-4 bg-primary mx-2 hidden lg:block"></div>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceToDoCard;
