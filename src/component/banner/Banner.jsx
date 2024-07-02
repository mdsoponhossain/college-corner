
const Banner = () => {
    return (
        <div className="hero min-h-[500px] bg-[rgb(20,69,47)] text-white">
            <div className="hero-content text-center relative">
                <div className="max-w-full flex justify-between border border-white h-[400px]">
                    <div className="border h-full w-[40%]">
                        <img className="h-full w-[900px]" src="https://i.ibb.co/VqqC3wz/student2.png" alt="" />
                    </div>

                    {/* <div className="border-4 border-red-600 flex-grow ">
                        <div className="border h-[300px] mt-[10%]">
                            <h1 className="text-4xl font-bold border">Welcome to CollegeCorner</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div> */}


                    <div className="border h-full w-[40%]">
                        <img className="h-full w-[900px]" src="https://i.ibb.co/YXb0qmy/student3.png" alt="" />
                    </div>
                </div>
                {/* text */}

                <div className="border-4 border-red-600 absolute ">
                    <div className="border h-[300px] mt-[10%]">
                        <h1 className="text-4xl font-bold border">Welcome to CollegeCorner</h1>
                        <p className="py-6 w-[40%] mx-auto">

                            Choose your college. Book your spot  with our  platform. Secure your future by selecting the best college for your needs. 
                        </p>
                        <button className="btn bg-white text-green-700">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;