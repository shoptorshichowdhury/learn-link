import demoImg from "../../assets/banner/class.jpg";
import buyerImg from "../../assets/banner/banner1.png";
import { Link } from "react-router-dom";

const PopularServiceCard = () => {
  return (
    <div className="p-4 border bg-primary flex flex-col md:flex-row items-center gap-5 rounded-xl text-white">
      {/* service image */}
      <div className="md:w-2/5 h-full">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={demoImg}
          alt=""
        />
      </div>

      {/* service content */}
      <div className="md:w-3/5 space-y-8">
        {/* 1st part */}
        <div className="space-y-4">
          <p className="font-poppins text-xl md:text-2xl text-secondary font-medium">Web Development</p>
          <p className="text-sm font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            maxime, fuga nemo blanditiis,Lorem.
          </p>
          {/* price  */}
          <p className="font-poppins text-accent font-medium text-base md:text-lg">Price: $500</p>
        </div>
        {/* 2nd part */}
        <div className="flex gap-10 items-center">
          {/* service provider details */}
          <div className="flex items-center gap-1 md:gap-3 bg-secondary/10 w-max px-2 md:px-4 py-1 rounded-lg">
            <div className="w-12 h-12 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full border border-secondary"
                src={buyerImg}
                alt=""
              />
            </div>
            <p>John Smith</p>
          </div>

          {/* view details button */}
          <Link to={`/services/id`}>
            <button className="btn bg-secondary border-transparent hover:bg-transparent hover:border-secondary hover:text-secondary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
