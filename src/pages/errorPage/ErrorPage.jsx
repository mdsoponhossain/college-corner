import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[rgb(214,249,230)]">
            <div className="h-[98vh]  w-[1280px] mx-auto flex justify-between items-center gap-[10%]">
                <div className="">
                    <h1 className="text-5xl font-bold">Ooops....</h1>
                    <h2 className="text-5xl">Page not found</h2>
                    <p className="my-16">The page your are lookingfor does not esist or some other  <br></br> error occred go back to home page.</p>
                    <NavLink to={-1} className=" bg-[rgb(53,223,148)] hover:bg-[rgb(48,197,133)] px-10 py-2 rounded-lg">Go Back</NavLink>
                </div>
                <div><img src="https://i.ibb.co/9n55hzg/9c0d3a27-6fa0-475e-bcb0-6759d5211a09-cover.png" alt="" /></div>
            </div>
        </div>
    );
};

export default ErrorPage;