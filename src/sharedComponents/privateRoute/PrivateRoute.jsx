import { useContext } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { currentUser, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className="grid justify-center items-center h-[70vh]">
            <span className="block loading loading-bars loading-lg"></span>
        </div>
    }

    else if (currentUser) {
        return children;
    }
    else {
        return <Navigate to='/sign-up'></Navigate>
    }
};

export default PrivateRoute;