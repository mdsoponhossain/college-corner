
const CollegesBanner = () => {
    return (
        <div className="hero min-h-[500px] bg-[rgb(20,69,47)] text-white">
            <div className="hero-content text-center relative p-0">
                <div className="max-w-full  md:flex justify-between items-center h-fit md:h-[500px]  mx-auto">
                    <div className=" h-[300px] w-full md:h-full md:w-[50%]">
                        <img className="h-full w-full " src="https://i.ibb.co/VqqC3wz/student2.png" alt="" />
                    </div>

                    <div className="flex-grow  md:w-[80%] grid items-center">
                        <div className=" h-[200px] mt-[10%]">
                            <h1 className=" text-2xl md:text-4xl font-bold mb-5">Find Your college Here</h1>
                            <div className="">
                                <input type="text" name="searchText" className="pl-2 h-12 w-[70%]" placeholder="Your Search Text..." />
                                <button className="px-3 py-[12.5px] bg-primary text-white font-bold">Search</button>
                            </div>
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