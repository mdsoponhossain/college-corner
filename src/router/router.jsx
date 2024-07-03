import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/myCollege/MyCollege";
import Colleges from "../pages/colleges/Colleges";
import ErrorPage from "../pages/errorPage/ErrorPage";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import CollegeDetails from "../pages/collegeDetails/CollegeDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'colleges',
            element: <Colleges></Colleges>
        },
        {
            path: 'admission',
            element: <Admission></Admission>
        },
        {
            path: 'my-college',
            element: <MyCollege></MyCollege>
        },
        {
            path:'/sign-up',
            element:<SignUp></SignUp>
        },{
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/college-detail',
            element:<CollegeDetails></CollegeDetails>
        }
        
        ]
    },
]);

export default router;