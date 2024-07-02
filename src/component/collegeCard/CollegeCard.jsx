import { CiClock2 } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import './collegeCard.css'
const CollegeCard = () => {
    return (
        <div className="my-5">
            <h1 className="text-4xl text-center">Explore Your Institute</h1>
            <div className="flex justify-center">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
            {/* card container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {/* first card */}
                <div className=" bg-base-100  shadow-xl card-radius">

                    <figure>
                        <img className="rounded-t-md"
                            src="https://images.theconversation.com/files/42339/original/2r9q69ts-1393218447.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
                            alt="Shoes" />
                    </figure>

                    <div className="flex gap-4 py-4 px-2">
                        <div className="flex gap-2 items-center">
                            <CiClock2></CiClock2>
                            <p>12 Feb 2024</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FaBook></FaBook>
                            <p>4 Research</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <MdEmojiEvents></MdEmojiEvents>
                            <p>10 Events</p>
                        </div>

                    </div>

                    <div className="p-3">
                        <h2 className="card-title">University of Melbourne</h2>
                        <p className="text-justify">It ranks #1 in Australia, and 32 globally Furthermore.It also ranks sixth in graduate employability worldwide.</p>
                    </div>

                    {/* horizontal line */}
                    <div className="mr-2 border-2">

                    </div>
                    {/* reviews */}

                    <div className="flex justify-between item-center px-2 py-4">
                        <div><button className="btn btn-primary">Details</button></div>
                        <div className="flex items-center gap-1">
                            <p>(4)</p>
                            <ReactStars
                                count={5}
                                value={3.5}
                                isHalf={true}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div className=" bg-base-100  shadow-xl card-radius">

                    <figure>
                        <img className="rounded-t-md"
                            src="https://images.theconversation.com/files/42339/original/2r9q69ts-1393218447.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
                            alt="Shoes" />
                    </figure>

                    <div className="flex gap-4 py-4 px-2">
                        <div className="flex gap-2 items-center">
                            <CiClock2></CiClock2>
                            <p>12 Feb 2024</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FaBook></FaBook>
                            <p>4 Research</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <MdEmojiEvents></MdEmojiEvents>
                            <p>10 Events</p>
                        </div>

                    </div>

                    <div className="p-3">
                        <h2 className="card-title">University of Melbourne</h2>
                        <p className="text-justify">It ranks #1 in Australia, and 32 globally Furthermore.It also ranks sixth in graduate employability worldwide.</p>
                    </div>

                    {/* horizontal line */}
                    <div className="mr-2 border-2">

                    </div>
                    {/* reviews */}

                    <div className="flex justify-between item-center px-2 py-4">
                        <div><button className="btn btn-primary">Details</button></div>
                        <div className="flex items-center gap-1">
                            <p>(4)</p>
                            <ReactStars
                                count={5}
                                value={3.5}
                                isHalf={true}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>

                {/* third card */}
                <div className=" bg-base-100  shadow-xl card-radius">

                    <figure>
                        <img className="rounded-t-md"
                            src="https://images.theconversation.com/files/42339/original/2r9q69ts-1393218447.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
                            alt="Shoes" />
                    </figure>

                    <div className="flex gap-4 py-4 px-2">
                        <div className="flex gap-2 items-center">
                            <CiClock2></CiClock2>
                            <p>12 Feb 2024</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FaBook></FaBook>
                            <p>4 Research</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <MdEmojiEvents></MdEmojiEvents>
                            <p>10 Events</p>
                        </div>

                    </div>

                    <div className="p-3">
                        <h2 className="card-title">University of Melbourne</h2>
                        <p className="text-justify">It ranks #1 in Australia, and 32 globally Furthermore.It also ranks sixth in graduate employability worldwide.</p>
                    </div>

                    {/* horizontal line */}
                    <div className="mr-2 border-2">

                    </div>
                    {/* reviews */}

                    <div className="flex justify-between item-center px-2 py-4">
                        <div><button className="btn btn-primary">Details</button></div>
                        <div className="flex items-center gap-1">
                            <p>(4)</p>
                            <ReactStars
                                count={5}
                                value={3.5}
                                isHalf={true}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CollegeCard;