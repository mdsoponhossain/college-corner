

import { useContext, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../contextProvider/ContextProvider";




const Login = () => {
    const { handleSignIn, handleResetPassword } = useContext(AuthContext);
    const navigation = useNavigate();
    const [email, setEmail] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignIn(email, password)
            .then((res) => {
                if (res?.user) {
                    //notify does not
                    // notify()
                    navigation('/')
                }
            })
            .catch(() => { })

    }

    const resetThePassword = () => {
        if (email?.length > 12) {
            handleResetPassword(email)
                .then(() => { })
                .catch(() => { })
        }
    }

    return (
        <div className="hero min-h-screen w-full text-black bg-base-200">

            <div className="md:hero-content w-full flex-col ">

                <div className="card flex-shrink-0 w-[100%] mx-auto  md:w-[500px] h-fit md:shadow-xl md:bg-base-100">
                    <h1 className="text-2xl md:text-5xl  font-bold text-center text-green-700 md:mb-2 pt-5 md:pt-10">Login </h1>
                    <form onSubmit={signIn} className="card-body w-full">
                        {/* <div className="w-full mb-1">

                        </div> */}

                        {/* <div className="w-full grid justify-center">

                            <span className="text-xl inline-block font-bold text-gray-500">Or</span>

                        </div> */}


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="username" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" autoComplete="current-password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={resetThePassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-green-700 hover:bg-green-900">Login</button>
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
