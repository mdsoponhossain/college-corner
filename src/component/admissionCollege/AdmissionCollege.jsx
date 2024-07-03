import { useForm } from "react-hook-form"
const AdmissionCollege = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    return (
        <div>
            <h1 className="text-4xl text-center mt-3">Colleges</h1>
            <div className="flex justify-center shadow-xl md:shadow-sm">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>

            {/* college name container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5 my-5">
                {/* colleges name cards 1 */}
                <div className="card bg-base-100  shadow-xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-green-600">Universiy of Melbourne</h1>
                    </div>
                </div>
                {/* colleges name cards 2 */}
                <div className="card bg-base-100  shadow-xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-green-600">Universiy of Melbourne</h1>
                    </div>
                </div>
                {/* colleges name cards 3 */}
                <div className="card bg-base-100  shadow-xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-green-600">Universiy of Melbourne</h1>
                    </div>
                </div>
                {/* colleges name cards 1 */}
                <div className="card bg-base-100  shadow-xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-green-600">Universiy of Melbourne</h1>
                    </div>
                </div>
                {/* colleges name cards 2 */}
                <div className="card bg-base-100  shadow-xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-green-600">Universiy of Melbourne</h1>
                    </div>
                </div>
                {/* colleges name cards 3 */}
                <div className="card bg-base-100  shadow-xl">
                    <div className="card-body">
                        <label htmlFor="my_modal_7" className="border-4 border-black ">
                        <h1 className="text-2xl font-bold text-green-600">Universiy of Melbourne</h1>
                        </label>
                        
                    </div>
                </div>

                {/* modal click */}
                {/* <label htmlFor="my_modal_7" className="button-primary  py-2 px-5 mx-3 md:px-10">
                    Book
                </label> */}

                {/* modal section */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal " role="dialog">
                    <div className="modal-box md:p-10">
                        <h3 className="text-3xl dark:black mb-5 md:mb-8 font-bold text-center ">Booking Room Email</h3>

                        <form >
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Your Name" {...register("name", { required: true })} />
                                </div>

                                <div>
                                    <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Phone Number" {...register("phone", { required: true })} />
                                </div>

                                <div>
                                    <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="email" placeholder="Email" {...register("email", { required: true })} />
                                </div>

                                <div>
                                    <input className="border pl-1 md:pl-3 h-12 mb-2 md:mb-6  border-black w-full" type="text" placeholder="Address" {...register("address", { required: true })} />
                                </div>
                                <div>
                                    <span>Date of birth</span>
                                    <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-6  border-black w-full" type="date" placeholder="Date In" {...register("date_birth", { required: true })} />
                                </div>
                                <div>
                                    <span>Your Photo</span>
                                    <input type="file" {...register("image", { required: true })} className="dark:bg-slate-700 file-input file-input-bordered w-full " />
                                </div>
                                
                            </div>
                            <textarea className="w-full mb-8 pl-3 border border-black" name="" placeholder="Subject" {...register("Subject", { required: true })} cols="30" rows='6'></textarea>
                            {/* <div className="text-center button-primary py-2">
                                            <span className="text-center  ">Submit Reservation</span>
                                        </div> */}


                            <input className="text-center button-primary py-2 w-full" type="submit" value="Reservation" />



                        </form>


                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
                {/* end modal */}
            </div>
        </div>
    );
};

export default AdmissionCollege;