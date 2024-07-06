import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contextProvider/ContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const AddReview = () => {
    const { currentUser } = useContext(AuthContext);
    const { id } = useParams();
    const navigation = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();


    const onSubmit = data => {
        data.college_id = id
        fetch('https://college-corner-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    navigation(`/my-college/${currentUser?.email}`)
                    // setTimeout(navigation(`/my-college/${currentUser?.email}`),5000)
                }
            })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content">

                <div className="max-w-[400px] mx-auto bg-slate-200 p-10">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <input defaultValue={currentUser?.displayName} className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Your Name" {...register("user_name", { required: true })} />
                            </div>

                            <div>
                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Phone Number" {...register("user_phone", { required: true })} />
                            </div>

                            <div>
                                <input defaultValue={currentUser?.email} className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="email" placeholder="Email" {...register("user_email", { required: true })} />
                            </div>

                            <div>
                                <input className="border pl-1 md:pl-3 h-12 mb-2 md:mb-6  border-black w-full" type="text" placeholder="Address" {...register("user_address", { required: true })} />
                            </div>
                            <div>
                                <span>Ratings</span>
                                <select {...register("user_ratings", { required: true })} className="select select-bordered w-full max-w-xs">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div>
                                <span>Your Photo</span>
                                <input defaultValue={currentUser?.photoURL} className="border pl-1 md:pl-3 h-12 mb-2 md:mb-6  border-black w-full" type="text" placeholder="image..."  {...register("user_photo", { required: true })} />
                            </div>

                        </div>
                        <textarea className="w-full mb-8 pl-3 border border-black" name="" placeholder="your comment" {...register("user_comment", { required: true })} cols="30" rows='2'></textarea>
                        <input className="text-center bg-green-800 text-white py-2 w-full" type="submit" value="Submit" />



                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;