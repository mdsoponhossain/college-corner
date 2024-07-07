import { Link } from 'react-router-dom';
import './homeReserachPaper.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from 'react';
import Aos from 'aos';
const HomeResearchPaper = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        })
    }, [])

    return (
        <div className="mt-5 max-w-[1280px] mx-auto">
            <h1 className="text-2xl md:text-4xl text-center">Student's Research</h1>
            <div className="flex justify-center">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
            {/* research card container */}
            <div data-aos="flip-left" className="relative  h-fit md:h-[600px]">
                {/* image-1 */}
                <div className="md:absolute md:w-[30%] right-[35%] top-[10%] h-[200px] bg-cover"
                    style={{
                        backgroundImage: "url(https://www.edgeip.com/images/FCK/Image/202201/VIU-UndergradResearch.jpg)",
                    }}
                >
                    <div className="hover:bg-black w-full h-full hover:bg-opacity-30 grid justify-center items-center go-btn-container">
                        <Link className="text-3xl go-btn text-white"><FaArrowRightLong></FaArrowRightLong></Link>

                    </div>


                </div>
                {/* image-2*/}
                <div className="md:absolute my-4 md:my-0 md:w-[30%] bottom-[10%] right-[10%] bg-cover h-[200px]"
                    style={{
                        backgroundImage: "url(https://www.keene.edu/ksc/assets/files/34360/chemistryclass-studentresearch.standard-landscape.1028x579.jpg?20181217121222)",
                    }}
                >

                    <div className="hover:bg-black w-full h-full hover:bg-opacity-30 grid justify-center items-center go-btn-container">
                        <Link className="text-3xl go-btn text-white"><FaArrowRightLong></FaArrowRightLong></Link>

                    </div>


                </div>

                {/* image-3*/}
                <div className="my-4 md:absolute md:w-[30%] bottom-[10%] left-[10%] h-[200px] bg-cover"
                    style={{
                        backgroundImage: "url(https://dsu.edu/research/_files/research-group.jpg)",
                    }}
                >
                    <div className="hover:bg-black w-full h-full hover:bg-opacity-30 grid justify-center items-center go-btn-container">
                        <Link className="text-3xl go-btn text-white"><FaArrowRightLong></FaArrowRightLong></Link>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default HomeResearchPaper;