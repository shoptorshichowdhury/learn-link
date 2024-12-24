import background from "../assets/allservicesBackground.png";
import detailsImg from "../assets/details.png";
import serviceImg from "../assets/serviceCardDemo.jpg";
import buyerImg from "../assets/banner/banner1.png";
import { Link } from "react-router-dom";

const SingleServiceDetails = () => {
  return (
    <section>
      {/* header part */}
      <div
        className="h-[130px] md:h-[300px] bg-no-repeat bg-cover bg-top overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
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
              src={serviceImg}
              alt="service-image"
            />
          </div>
          {/* details content */}
          <div className="space-y-5">
            <h3 className="text-xl md:text-4xl font-poppins text-primary font-semibold">
              Frontend Development
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              repudiandae, illum vel vero eius officiis quaerat hic, ut
              recusandae at dolores velit sunt rerum molestiae tenetur dolorum
              quia adipisci similique?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error hic ducimus ullam labore, fuga, facilis
              laboriosam aliquid ad, quod odio maxime architecto doloremque id
              velit porro neque atque rerum aspernatur! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dolore numquam saepe iusto
              dolorem perspiciatis aut blanditiis accusamus vitae illo.
            </p>
            <div className="flex items-center gap-5">
              <p className="text-primary font-medium">Course Provider:</p>
              <div className="flex items-center gap-5 bg-secondary/10 w-max px-2 md:px-4 py-1 rounded-lg">
                <div className="w-12 h-12 rounded-full">
                  <img
                    className="w-full h-full object-cover rounded-full border border-secondary"
                    src={buyerImg}
                    alt="provider"
                  />
                </div>
                <p>John Smith</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-primary font-medium">Course Location:</p>
              <div>Baridhara, Dhaka</div>
            </div>
            <div className="flex items-center gap-10">
              <p className="text-primary font-bold text-lg">Price: $100</p>
              <Link to={`/bookService/id`}>
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
