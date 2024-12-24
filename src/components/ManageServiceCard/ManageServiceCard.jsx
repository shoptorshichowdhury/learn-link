import serviceCardImg from "../../assets/serviceCardDemo.jpg";
import buyerImg from "../../assets/banner/banner1.png";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSystemUpdate } from "react-icons/md";

const ManageServiceCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 border bg-secondary/10 rounded-lg shadow-md">
      {/* service image */}
      <div className="md:w-1/2 lg:w-2/5 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
          src={serviceCardImg}
          alt="service"
        />
      </div>

      {/* service text content */}
      <div className="md:w-1/2 lg:w-3/5 p-5 space-y-5 md:space-y-8">
        <div className="flex flex-col md:flex-row lg:items-center gap-5 lg:gap-8">
          <div className="px-4 py-1 bg-secondary/25 border border-secondary w-max text-sm rounded-3xl font-poppins font-medium text-primary">
            Web Development
          </div>
          <div className="text-primary font-poppins text-xl lg:text-2xl font-bold">
            Price: $100
          </div>
        </div>
        <div className="space-y-3 md:space-y-5">
          <h4 className="text-2xl text-primary font-semibold">
            Frontend Development
          </h4>
          <p className="text-sm md:text-base text-primary">
            Lorem ipsum dolor amet, consectetur adipisicing elit.
            Deleniti,veniam.lorem lorem lorem lorem lorem.
          </p>
          <Link to={`/services/id`}>
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
              src={buyerImg}
              alt="buyer"
            />
          </div>
          <p>John Smith</p>
        </div>
        {/* action buttons  */}
        <div className="flex  gap-5 justify-start md:justify-end">
          {/* update button */}
          <div>
            <button className="btn btn-sm md:btn-md btn-success md:text-base">
              <MdSystemUpdate className="text-primary" /> Update
            </button>
          </div>
          {/* delete button */}
          <div>
            <button className="btn btn-sm md:btn-md btn-error md:text-base">
              <RiDeleteBin6Line className="text-primary" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;
