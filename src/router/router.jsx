import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/myCollege/MyCollege";
import Colleges from "../pages/colleges/Colleges";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'admission',
            element:<Admission></Admission>
        },
        {
            path: 'my-college',
            element:<MyCollege></MyCollege>
        },
        {
            path: 'colleges',
            element:<Colleges></Colleges>
        },

        ]
    },
]);

export default router;