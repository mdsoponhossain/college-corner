import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

const CollegeDetailsBanner = () => {
    return (
        <div className="h-[300px] relative" style={{
            backgroundImage: "url(https://offloadmedia.feverup.com/secretsydney.com/wp-content/uploads/2024/03/14121456/University-of-Sydney-Eriksson-Luo-Unsplash-1-1024x576.jpg)",
        }}>
            <div className="w-full h-full bg-[rgb(20,69,47)] absolute opacity-75 flex justify-center items-center">
                <div className="text-white w-[40%] h-[40%] grid justify-center items-center">
                    <div className="text-lg md:text-xl">
                        <h1 className="text-center mb-4 font-bold">College Details</h1>
                        <div className="flex items-center gap-2 font-bold">
                            <NavLink to='/'>Home</NavLink>
                            <MdOutlineArrowForwardIos>></MdOutlineArrowForwardIos>
                            <NavLink to='/'>Admission</NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CollegeDetailsBanner;