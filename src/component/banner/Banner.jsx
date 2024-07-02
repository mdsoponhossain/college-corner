
const Banner = () => {
    return (
        <div className="hero min-h-[500px] bg-[rgb(20,69,47)] text-white">
            <div className="hero-content text-center relative p-0">
                <div className="max-w-full  md:flex justify-between border border-white items-center h-fit md:h-[500px]  mx-auto">
                    <div className="border h-[300px] w-full md:h-full md:w-[50%]">
                        <img className="h-full w-full " src="https://i.ibb.co/VqqC3wz/student2.png" alt="" />
                    </div>

                    <div className="border-4 border-red-600 flex-grow ">
                        <div className="border h-[300px] mt-[10%]">
                            <h1 className=" text-3xl md:text-4xl font-bold border">Welcome to CollegeCorner</h1>
                            <p className="py-6 text-lg md:text-xl">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn bg-white text-green-700">Get Started</button>
                        </div>
                    </div>


                    <div className="border h-[300px] w-full md:h-full md:w-[50%]">
                        <img className="h-full w-full " src="https://i.ibb.co/YXb0qmy/student3.png" alt="" />
                    </div>


                </div>
              

            

            </div>
        </div>
    );
};

export default Banner;