import { useLoaderData, useParams } from "react-router-dom";

const CollegeDetailsContainer = () => {


    const data = useLoaderData();
    // const { id } = useParams();
    // console.log(id)
    // console.log(data)



    return (
        <div className=" bg-base-100  shadow-xl h-fit w-[1280px] mx-auto">
            <h1 className="text-4xl text-center mt-3">Colleges Info</h1>
            <div className="flex justify-center shadow-xl md:shadow-sm">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
            <figure>
                <img className="w-full h-[500px]"
                    src={data?.image}
                    alt="Shoes" />
            </figure>
            <div className="px-2">
                <div className="text-justify">
                    <div className="my-5 ">
                        {/* college name and history */}
                        <h1 className="text-3xl font-bold">{data?.college_name}</h1>
                        <p>{data?.college_history}</p>
                    </div>
                    <div className="my-5">
                        <h1 className="text-3xl font-bold">College Events</h1>
                        <p>{data?.events}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetailsContainer;