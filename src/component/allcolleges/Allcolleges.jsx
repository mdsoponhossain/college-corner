import { CiClock2 } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import CountUp from 'react-countup';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/ContextProvider";
import Aos from "aos";

const Allcolleges = () => {
    const { searchText } = useContext(AuthContext);
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch(`https://college-corner-server.vercel.app/colleges/all?searchText=${searchText}`)
            .then(res => res.json())
            .then(data => setColleges(data));
    }, [searchText])


    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        })
    }, [])




    return (
        <div className="mt-0 md:mt-20 relative max-w-[1280px] mx-auto">
            {/* react counter */}
            <div className="w-full my-3 bg-white h-fit pb-4 md:pb-0 md:h-[150px] md:absolute -top-[200px] grid justify-center md:grid-cols-2 lg:grid-cols-4 md:pl-[15%] lg:pl-[7%] shadow-md">

                <div className=" text-xl md:text-3xl font-bold text-[rgb(20,69,47)] flex items-center gap-2">
                    <span>+ <CountUp end={6} duration={5} /></span>
                    <h1>Colleges</h1>
                </div>

                <div className="text-xl md:text-3xl font-bold text-[rgb(20,69,47)] flex items-center gap-2">
                    <span>+ <CountUp end={100} duration={5} /></span>
                    <h1>Faculties</h1>
                </div>
                <div className="text-xl md:text-3xl font-bold text-[rgb(20,69,47)] flex items-center gap-2">
                    <span>+ <CountUp end={6000} duration={5} /></span>
                    <h1>Students</h1>
                </div>

                <div className="text-xl md:text-3xl font-bold text-[rgb(20,69,47)] flex items-center gap-2">
                    <span>+ <CountUp end={10} duration={5} /></span>
                    <h1>Campus</h1>
                </div>



            </div>

            <h1 className="text-2xl md:text-4xl text-center">Explore Your Institute</h1>
            <div className="flex justify-center">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
            {/* card container */}
            {
                colleges?.length === 0 ? <div className="text-center">No Matched College Here</div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:my-6 lg:gap-10 lg:my-7 px-3">
                    {/* first card */}
                    {
                        colleges?.map((college) =>
                            <div data-aos="zoom-in-up" key={college._id} className="bg-base-100 my-5 md:my-0 hover:bg-base-200 shadow-xl card-radius">

                                <figure>
                                    <img className="rounded-t-md h-[250px] w-full"
                                        src={college?.image}
                                        alt="Shoes" />
                                </figure>

                                <div className="grid gap-1 grid-cols-2 md:grid-cols-3 md:gap-4 py-4 px-2">
                                    <div className="flex gap-2 items-center">
                                        <CiClock2></CiClock2>
                                        <p>{college?.admission_date}</p>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <FaBook></FaBook>
                                        <p>{college?.research_number}Research</p>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <MdEmojiEvents></MdEmojiEvents>
                                        <p>{college?.event_number} Events</p>
                                    </div>

                                </div>

                                <div className="p-3">
                                    <h2 className="card-title">{college?.college_name}</h2>
                                    <p className="text-justify">{college?.ranking_details}</p>
                                </div>

                                {/* horizontal line */}
                                <div className="mr-2 border-2">

                                </div>
                                {/* reviews */}

                                <div className="flex justify-between item-center px-2 py-4">
                                    <div><Link to={`/college-details/${college?._id}`} className="primary-btn">Details</Link></div>
                                    <div className="flex items-center gap-1">
                                        <p>({college?.reviews_number})</p>
                                        <ReactStars
                                            count={5}
                                            value={college?.average_reviews}
                                            isHalf={true}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>
            }
        </div>
    );
};

export default Allcolleges;