import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-[500px] bg-[rgb(20,69,47)] text-white">
            <div className="hero-content text-center relative p-0">
                <div className="max-w-full  md:flex justify-between items-center h-fit md:h-[500px]  mx-auto">
                    <div className=" h-[300px] w-full md:h-full md:w-[50%]">
                        <img className="h-full w-full " src="https://i.ibb.co/VqqC3wz/student2.png" alt="" />
                    </div>

                    <div className="flex-grow ">
                        <div className=" min-h-[300px] max-h-fit pb-8 md:pb-0 mt-[10%]">
                            <h1 className=" text-2xl md:text-4xl font-bold">Welcome to CollegeCorner</h1>
                            <p className="py-6 text-lg md:text-xl text-justify  md:text-center px-3 md:px-0">
                                CollegeCorner offers personalized application guidance, helping students navigate the college application process with ease and confidence.
                            </p>
                            <Link to='/colleges' className="btn bg-slate-900 hover:bg-black text-white hover:border-none">Explore</Link>
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

export default Banner;