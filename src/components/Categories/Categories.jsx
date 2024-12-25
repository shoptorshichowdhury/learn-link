import { FaArrowRight, FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";

import icon1 from "../../assets/categoriesIcon/business/icons8-briefcase-64.png";
import icon2 from "../../assets/categoriesIcon/design/icons8-design-64.png";
import icon3 from "../../assets/categoriesIcon/development/icons8-development-64.png";
import icon4 from "../../assets/categoriesIcon/cyber/icons8-cyber-64.png";
import icon5 from "../../assets/categoriesIcon/lifestyle/icons8-life-64.png";
import icon6 from "../../assets/categoriesIcon/marketing/icons8-marketing-64.png";
import icon7 from "../../assets/categoriesIcon/money/icons8-money-yours-64.png";
import icon8 from "../../assets/categoriesIcon/photography/icons8-photography-64.png";

const Categories = () => {
  return (
    <div className="w-11/12 mx-auto py-10 space-y-5 md:space-y-14">
      {/* top section */}
      <div className="flex justify-between items-end">
        <div className="space-y-2 md:space-y-4">
          <div className="flex gap-1 md:gap-3 items-center">
            <FaBook className="text-secondary text-sm"></FaBook>
            <p className="uppercase tracking-widest font-poppins font-bold text-secondary text-xs md:text-sm">
              Course categories
            </p>
          </div>
          <h3 className="text-xl md:text-4xl font-poppins text-primary font-semibold">
            Top Category Courses
          </h3>
        </div>
        {/* view all button */}
        <Link to={`/allServices`}>
          <button className="btn bg-secondary text-primary hover:bg-transparent hover:text-primary border-transparent hover:border-primary md:text-base text-sm">
            All Course <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>

      {/* categories container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <CategoryCard icon={icon1} title={`Business`} />
        <CategoryCard icon={icon2} title={`Design`} />
        <CategoryCard icon={icon3} title={`Development`} />
        <CategoryCard icon={icon4} title={`Cyber`} />
        <CategoryCard icon={icon5} title={`LifeStyle`} />
        <CategoryCard icon={icon6} title={`Marketing`} />
        <CategoryCard icon={icon7} title={`Finance`} />
        <CategoryCard icon={icon8} title={`Photography`} />
      </div>
    </div>
  );
};

export default Categories;
