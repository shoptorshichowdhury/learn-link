import { Link } from "react-router-dom";

const Slide = ({ banner, title, description }) => {
  return (
    <div className="bg-secondary/10">
      <div className="lg:h-[38rem] flex lg:flex-row flex-col items-center pt-5 md:pt-10 w-11/12 mx-auto">
        {/* text content */}
        <div className="lg:w-1/2 flex flex-col gap-3 md:gap-10 px-3 md:px-0">
          <p className="font-poppins text-secondary font-bold text-xs md:text-sm tracking-widest">
            Welcome to LearnLink
          </p>
          <h3
            className="text-2xl md:text-4xl lg:text-6xl font-poppins font-bold text-primary
        "
          >
            {title}
          </h3>
          <p className="text-sm md:text-base tracking-wide font-light">
            {description}.
          </p>
          <Link to={`/allServices`}>
            <button className="btn btn-sm md:btn-md bg-secondary text-primary border-transparent text-base hover:bg-transparent hover:border-primary">
              Explore More
            </button>
          </Link>
        </div>

        {/* image */}
        <div className="lg:w-1/2 h-full relative">
          <div className="hidden lg:block border-[2px] border-secondary rounded-full absolute w-[400px] h-[400px] z-0 left-[30%] top-[20%]"></div>
          <img
            className="w-full h-full object-cover relative z-10"
            src={banner}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
