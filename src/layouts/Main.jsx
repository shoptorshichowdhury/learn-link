import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet></Outlet>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
