import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-roboto">
      <div className="bg-primary sticky z-50 top-0">
        <Navbar />
      </div>
      <section className="min-h-[calc(100vh-196px)]">
        <Outlet></Outlet>
      </section>
      <div className="bg-primary">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
