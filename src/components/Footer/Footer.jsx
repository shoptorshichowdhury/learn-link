import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto footer text-neutral-content items-center py-5 font-poppins">
      <Link to={`/`}>
        <aside className="">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <div className="w-10 h-10 md:w-14 md:h-14">
              <img
                className="w-full h-full object-cover"
                src={logo}
                alt="logo"
              />
            </div>
            <p className="text-xl md:text-3xl lg:text-4xl text-accent">
              Learn<span className="text-secondary">Link</span>
            </p>
          </div>
          <p className="font-poppins text-sm font-medium">
            Copyright © {new Date().getFullYear()} - All right reserved
            Shoptorshi Chowdhury.
          </p>
        </aside>
      </Link>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to={`/`}>
          <FaLinkedin className="text-lg md:text-2xl text-secondary" />
        </Link>
        <Link to={`/`}>
          <FaFacebook className="text-lg md:text-2xl text-secondary" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
