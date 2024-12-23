import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-roboto">
      <div className="bg-primary">
        <Navbar />
      </div>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
