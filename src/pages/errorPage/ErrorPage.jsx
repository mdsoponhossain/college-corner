import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[rgb(214,249,230)]">
            <div className="h-[100vh] text-center md:text-left max-w-[1280px] mx-auto md:flex justify-between items-center gap-[10%]">
                <div className="w-full px-1 pt-10 md:pt-0">
                    <h1 className="text-3xl md:text-5xl font-bold">Ooops....</h1>
                    <h2 className="text-3xl md:text-5xl">Page not found</h2>
                    <p className="my-8 md:my-16">The page your are lookingfor does not esist or some other  <br className="hidden md:block"></br> error occred go back to home page.</p>
                    <NavLink to={-1} style={{textDecoration:'none'}} className="bg-[rgb(53,223,148)] hover:bg-[rgb(48,197,133)] px-10 py-2 rounded-lg deco">Go Back</NavLink>
                </div>
                <div className="mt-20 md:mt-0 "><img className="" src="https://i.ibb.co/9n55hzg/9c0d3a27-6fa0-475e-bcb0-6759d5211a09-cover.png" alt="" /></div>
            </div>
        </div>
    );
};

export default ErrorPage;