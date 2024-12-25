
import Carousel from "../components/Carousel/Carousel";
import PopularServices from "../components/PopularServices/PopularServices";
import PageTitle from "../components/shared/PageTitle";
import OurInstructors from "../components/OurInstructors/OurInstructors";

const Home = () => {
    return (
        <div>
            <PageTitle title={`Learn Link | Home`}></PageTitle>
            <Carousel/>
            <PopularServices/>
            <OurInstructors/>
        </div>
    );
};

export default Home;