import MyCollegeList from "../../component/myCollegeList/MyCollegeList";
import MycollegeBanner from "../../component/mycollegeBanner/MycollegeBanner";

const MyCollege = () => {
    return (
        <div>
           <MycollegeBanner></MycollegeBanner> 
           <MyCollegeList></MyCollegeList> 
        </div>
    );
};

export default MyCollege;