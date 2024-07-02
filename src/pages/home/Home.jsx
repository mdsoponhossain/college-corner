import Banner from "../../component/banner/Banner";
import CollegeCard from "../../component/collegeCard/CollegeCard";
import HomeGallery from "../../component/homeGallery/HomeGallery";
import HomeResearchPaper from "../../component/homeResearchPaper/HomeResearchPaper";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollegeCard></CollegeCard>
            <HomeGallery></HomeGallery>
            <HomeResearchPaper></HomeResearchPaper>
        </div>
    );
};

export default Home;