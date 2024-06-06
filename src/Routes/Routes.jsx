import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllStudySessions from "../Pages/AllStudySessions/AllStudySessions";
import SessionDetails from "../Pages/Home/Study Session Section/SessionDetails";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/study_sessions",
                element: <AllStudySessions></AllStudySessions>
            },
            {
                path: "/details/:id",
                element: <SessionDetails></SessionDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);