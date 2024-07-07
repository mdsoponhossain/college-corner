import { useContext, useEffect } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";
import { IoSearchOutline } from "react-icons/io5";
import Aos from "aos";


const CollegesBanner = () => {
    const { handleSearch } = useContext(AuthContext);
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        })
    }, [])

    return (
        <div className="hero min-h-[500px] bg-[rgb(20,69,47)] text-white">
            <div className="hero-content text-center relative p-0">
                <div className="max-w-full  md:flex justify-between items-center h-fit md:h-[500px]  mx-auto">
                    <div className=" h-[300px] w-full md:h-full md:w-[50%]">
                        <img className="h-full w-full " src="https://i.ibb.co/VqqC3wz/student2.png" alt="" />
                    </div>

                    <div data-aos="zoom-in" className="flex-grow  md:w-[80%] grid items-center">
                        <div className=" h-[100px] mt-[10%] grid justify-center">
                            <h1 className=" text-2xl md:text-4xl font-bold mb-5 text-center">Find Your college Here</h1>
                            <form onSubmit={handleSearch} className="flex">
                                <input type="text" name="searchText" className="text-black pl-2 h-12 w-[80%]" placeholder="Your Search Text..." />
                                <button className="grid justify-center items-center w-[80px] h-12 bg-black text-2xl"><IoSearchOutline className="block"></IoSearchOutline></button>
                            </form>
                        </div>
                    </div>


                    <div className="h-[300px] w-full hidden md:block md:h-full md:w-[50%]">
                        <img className="h-full w-full " src="https://i.ibb.co/YXb0qmy/student3.png" alt="" />
                    </div>


                </div>




            </div>
        </div>
    );
};

export default CollegesBanner;