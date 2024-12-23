import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const menuLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
    </>
  );

  const dashboardMenuLinks = (
    <>
      <li>
        <a>Add Service</a>
      </li>
      <li>
        <a>Manage Service</a>
      </li>
      <li>
        <a>Booked-Services</a>
      </li>
      <li>
        <a>Service-To-Do</a>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto flex justify-between items-center py-2">
      {/* navbar start */}
      <div className="font-poppins">
        <Link
          to={`/`}
          className="flex md:flex-row flex-col md:items-center md:gap-2"
        >
          <div className="w-10 h-10 md:w-16 md:h-16">
            <img className="w-full h-full object-cover" src={logo} alt="logo" />
          </div>
          <p className="text-xl md:text-3xl lg:text-4xl text-accent">
            Learn<span className="text-secondary">Link</span>
          </p>
        </Link>
      </div>

      {/* navbar center */}
      <div className="flex items-center md:gap-4">
        {/* menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex md:gap-8 lg:gap-14 items-center text-white text-lg">
            {menuLinks}
          </ul>
        </div>
        {/* Responsive dropdown menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
          >
            {menuLinks}
          </ul>
        </div>
        {/* dashboard dropdown menu*/}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-ghost text-white md:text-lg font-normal"
          >
            Dashboard
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 w-max rounded-box z-[1] mt-3 p-2 lg:px-4 shadow"
          >
            {dashboardMenuLinks}
          </ul>
        </div>
      </div>

      {/* navbar end */}
      <div className="flex items-center gap-8 text-white">
        <div>
          <button className="btn btn-sm lg:btn-md lg:text-base bg-accent text-primary border-transparent hover:bg-transparent hover:border-accent hover:text-accent">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
