import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SignUp = () => {


    const {
        register,
        handleSubmit,
    } = useForm();


    return (
        <div className="hero min-h-screen pt-8  dark:bg-black dark:text-slate-300  bg-base-200">
            <div className="md:hero-content w-full flex-col">
                <div className="card  dark:bg-slate-800 dark:text-slate-300 flex-shrink-0 w-[97%] mx-auto  md:w-[500px] h-fit shadow-xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-[#0cc4b0] pt-10">Sign Up </h1>
                    <form className="card-body w-full">

                        <p className="text-2xl font-bold text-center">Or</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} placeholder="Enter Your Name" className="dark:bg-slate-700 input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="dark:bg-slate-700 input input-bordered" required />
                        </div>

                        {/* photo uploading */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="dark:bg-slate-700 file-input file-input-bordered w-full " />
                        </div>




                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="Enter Your Password" className="dark:bg-slate-700 input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Sign Up</button>
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