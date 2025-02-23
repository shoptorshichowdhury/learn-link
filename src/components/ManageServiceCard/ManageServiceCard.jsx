import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSystemUpdate } from "react-icons/md";


const ManageServiceCard = ({ service, modernDelete }) => {
  const { _id, image, name, price, area, description, serviceProvider } =
    service || {};

 
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-secondary/15 rounded-lg shadow-md">
      {/* service image */}
      <div className="md:w-1/2 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
          src={image}
          alt="service"
        />
      </div>

      {/* service text content */}
      <div className="md:w-1/2 p-5 space-y-5 md:space-y-8">
        <div className="flex flex-col md:flex-row lg:items-center gap-5 lg:gap-8">
          <div className="px-4 py-1 bg-secondary/25 border border-secondary w-max text-sm rounded-3xl font-poppins font-medium text-primary">
            {area}
          </div>
          <div className="text-primary font-poppins text-xl lg:text-2xl font-bold">
            Price: ${price}
          </div>
        </div>
        <div className="space-y-3 md:space-y-5">
          <h4 className="text-2xl text-primary font-semibold">{name}</h4>
          <p className="text-sm md:text-base text-primary lg:w-3/4">
            {description.substring(0, 100)}
          </p>
          <Link to={`/services/${_id}`}>
            <button className="btn btn-link text-primary text-base font-medium p-0">
              View Details <FaLocationArrow className="" />
            </button>
          </Link>
        </div>
        {/* row 3 */}

        {/* service provider details */}
        <div className="flex items-center gap-1 bg-secondary/10 w-max px-2 md:px-4 py-1 rounded-lg">
          <div className="w-12 h-12 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full border border-secondary"
              src={serviceProvider?.photo}
              alt="provider"
            />
          </div>
          <p>{serviceProvider?.name}</p>
        </div>
        {/* action buttons  */}
        <div className="flex  gap-5 justify-start md:justify-end">
          {/* update button */}
          <Link to={`/updateService/${_id}`}>
            <button className="btn btn-sm md:btn-md btn-success md:text-base">
              <MdSystemUpdate className="text-primary" /> Update
            </button>
          </Link>
          {/* delete button */}
          <div>
            <button
              onClick={() => modernDelete(_id)}
              className="btn btn-sm md:btn-md btn-error md:text-base"
            >
              <RiDeleteBin6Line className="text-primary" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;
