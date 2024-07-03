

import { Link, } from "react-router-dom";




const Login = () => {



    

 

    return (
        <div className="hero min-h-screen w-full dark:bg-black dark:text-white text-black bg-base-200">
            <div className="md:hero-content w-full flex-col ">

                <div className="card dark:bg-slate-800 dark:text-white flex-shrink-0 w-[97%] mx-auto  md:w-[500px] h-fit shadow-xl bg-base-100">
                    <h1 className="text-5xl  font-bold text-center text-[#0cc4b0] mb-2 pt-10">Login </h1>
                    <form className="card-body w-full">
                        <div className="w-full mb-1">
                            
                        </div>

                        <div className="w-full grid justify-center">

                            <span className="text-xl inline-block font-bold text-gray-500">Or</span>

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" autoComplete="username" name="email" placeholder="Enter Your Email" className="dark:bg-slate-700 input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" autoComplete="current-password" className="dark:bg-slate-700 input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Login</button>
                            <label className="label">
                                <span>New here? please <Link to='/sign-up' className=" text-xl text-[#09ad9b] pl-2">SignUp</Link></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
