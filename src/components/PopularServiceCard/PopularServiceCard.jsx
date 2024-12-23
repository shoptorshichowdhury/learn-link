import demoImg from "../../assets/banner/class.jpg";
import buyerImg from "../../assets/banner/banner1.png";

const PopularServiceCard = () => {
  return (
    <div className="p-4 border bg-primary/95 flex flex-col md:flex-row items-center gap-5 rounded-xl text-white">
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
          <p className="font-poppins text-xl">Web Development</p>
          <p className="text-sm font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            maxime, fuga nemo blanditiis,Lorem.
          </p>
          {/* price  */}
          <p>Price: $500</p>
        </div>
        {/* 2nd part */}
        <div className="flex gap-10 items-center">
          {/* service provider details */}
          <div className="flex items-center gap-1 bg-secondary/10 w-max px-2 md:px-4 py-1 rounded-lg">
            <div className="w-12 h-12 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full"
                src={buyerImg}
                alt=""
              />
            </div>
            <p>John Smith</p>
          </div>

          {/* view details button */}
          <div>
            <button className="btn bg-secondary border-transparent hover:bg-transparent hover:border-secondary hover:text-secondary">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
