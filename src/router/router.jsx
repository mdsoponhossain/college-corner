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
import PrivateRoute from "../sharedComponents/privateRoute/PrivateRoute";
import AddReview from "../component/addReview/AddReview";

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
            element: <PrivateRoute><Admission></Admission></PrivateRoute>
        },
        {
            path: 'my-college/:email',
            element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>,
            loader: ({ params }) => fetch(`https://college-corner-server.vercel.app/user-booked-data/${params.email}`)
        },
        {
            path: '/sign-up',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/college-details/:id',
            element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://college-corner-server.vercel.app/colleges/${params.id}`)
        },
        {
            path: '/add-review/:id',
            element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
        }

        ]
    },
]);

export default router;