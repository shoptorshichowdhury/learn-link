
import Carousel from "../components/Carousel/Carousel";
import PopularServices from "../components/PopularServices/PopularServices";
import PageTitle from "../components/shared/PageTitle";

const Home = () => {
    return (
        <div>
            <PageTitle title={`Learn Link | Home`}></PageTitle>
            <Carousel/>
            <PopularServices/>
        </div>
    );
};

export default Home;