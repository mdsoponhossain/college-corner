import { Link, useLoaderData } from "react-router-dom";

const MyCollegeList = () => {
    const myBookedColleges = useLoaderData();
    return (
        <div className="min-h-20 md:min-h-[calc(100vh-628px)] px-2 md:px-5">
            <h1 className="text-2xl md:text-4xl text-center mt-3">My Applied College List</h1>
            <div className="flex justify-center">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
            {/* list container */}
            
            {
                myBookedColleges?.length === 0 ? <div className="text-center">NO Applied College</div> : <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>College</th>
                                <th>Admission Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                myBookedColleges?.map((myBookedCollege, index) =>
                                    <tr key={myBookedCollege._id}>
                                        <th>{index + 1}</th>
                                        <td><img className="h-16 w-16 rounded-full" src={myBookedCollege?.college_id?.image} alt={myBookedCollege?.college_id?.college_name} /></td>
                                        <td>{myBookedCollege?.college_id?.college_name}</td>
                                        <td>{myBookedCollege?.college_id?.admission_date}</td>
                                        <td>Applied</td>
                                        <td className="hover:bg-slate-200"><Link to={`/add-review/${myBookedCollege?.college_id?._id}`}>Add review</Link></td>
                                    </tr>

                                )
                            }


                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyCollegeList;