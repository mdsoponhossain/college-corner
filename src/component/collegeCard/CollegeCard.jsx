import { CiClock2 } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import './collegeCard.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CollegeCard = () => {

    const [topColleges, setTopColleges] = useState([]);
    useEffect(() => {
        fetch('https://college-corner-server.vercel.app/colleges/top')
            .then(res => res.json())
            .then(data => setTopColleges(data));
    }, [])


    return (
        <div className="my-5 max-w-[1280px] mx-auto">
            <h1 className="text-2xl md:text-4xl text-center">Explore Your Institute</h1>
            <div className="flex justify-center">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
             {/* card container */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:my-6 lg:gap-10 lg:my-7 px-3">
                {/* first card */}
                {
                    topColleges?.map((college)=>
                        <div key={college.id} className="bg-base-100  hover:bg-base-200 shadow-xl card-radius my-5 md:my-0">

                    <figure>
                        <img className="rounded-t-md h-[250px] w-full"
                            src={college?.image}
                            alt={college?.college_name} />
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

                    <div className="flex justify-between item-center px-2 py-4 ">
                        <div><Link to={`/college-details/${college?._id}`} className="primary-btn block">Details</Link></div>
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

        </div>
    );
};

export default CollegeCard;