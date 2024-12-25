
import Carousel from "../components/Carousel/Carousel";
import PopularServices from "../components/PopularServices/PopularServices";
import PageTitle from "../components/shared/PageTitle";
import OurInstructors from "../components/OurInstructors/OurInstructors";
import Categories from "../components/Categories/Categories";

const Home = () => {
    return (
        <div>
            <PageTitle title={`Learn Link | Home`}></PageTitle>
            <Carousel/>
            <Categories/>
            <PopularServices/>
            <OurInstructors/>
        </div>
    );
};

export default Home;