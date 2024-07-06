import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/ContextProvider";
const SignUp = () => {
    const { handleSignUp, handleUpdateProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
    } = useForm();
    const img_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_API_KEY}`
    // const onSubmit = async(data) => {
    //     const imageFile = { image: data.image[0] }
    //    fetch(img_hosting_api,imageFile,  {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         },
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))

    // };


    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axios.post(img_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        const img = res.data.data.url;
        if (res?.data?.data?.url) {
            handleSignUp(data?.email, data?.password)
                .then(res => {
                    if (res?.user) {
                        const profileInfo = { name: data?.name, img }
                        handleUpdateProfile(profileInfo)
                            .then(async () => {
                                const userInfo = { user_name: data?.name, user_email: data?.email, user_photo: img, user_password: data?.password }
                                await fetch('https://college-corner-server.vercel.app/user', {
                                    method: 'POST',
                                    headers: {
                                        'Content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userInfo)
                                });
                                // const result = res.json();
                                // console.log(result)
                            })
                            .catch(() => { })
                    }
                })
                .catch(() => { })
        }

    };

    return (
        <div className="hero min-h-screen md:pt-4 lg:pt-8">
            <div className="md:hero-content w-full flex-col">
                <div className="cardflex-shrink-0 w-[100%] mx-auto  md:w-[500px] h-fit shadow-xl bg-base-300 md:bg-base-100">
                    <h1 className="text-2xl md:text-5xl font-bold text-center text-green-700 pt-16 md:pt-10">Sign Up </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                        {/* <p className="text-2xl font-bold text-center">Or</p> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className=" input input-bordered" required />
                        </div>

                        {/* photo uploading */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className=" file-input file-input-bordered w-full " />
                        </div>




                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-green-700 hover:bg-green-900">Sign up</button>
                            <label className="label">
                                <span>Have an account? please <Link to='/login' className="text-xl text-[#09ad9b] pl-2">LogIn</Link></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;