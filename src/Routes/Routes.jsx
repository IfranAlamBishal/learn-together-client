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
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../Layouts/Main/Dashboard";
import Profile from "../Pages/DashboardPages/Profile/Profile";
import ViewBookedSessions from "../Pages/DashboardPages/ViewBookedSessions/ViewBookedSessions";
import CreateNotes from "../Pages/DashboardPages/CreateNotes/CreateNotes";
import ManageNotes from "../Pages/DashboardPages/ManageNotes/ManageNotes";
import ViewStudyMaterials from "../Pages/DashboardPages/ViewStudyMaterials/ViewStudyMaterials";
import AllUsers from "../Pages/DashboardPages/AllUsers/AllUsers";
import PendingSessions from "../Pages/DashboardPages/PendingSessions/PendingSessions";
import ApprovedSessions from "../Pages/DashboardPages/ApprovedSessions/ApprovedSessions";
import RejectedSessions from "../Pages/DashboardPages/RejectedSessions/RejectedSessions";
import AllMaterials from "../Pages/DashboardPages/AllMaterials/AllMaterials";
import CreateSessions from "../Pages/DashboardPages/CreateSessions/CreateSessions";
import TutorsStudySessions from "../Pages/DashboardPages/Tutor'sStudySession/TutorsStudySessions";
import UploadMaterials from "../Pages/DashboardPages/UploadMaterials/UploadMaterials";
import ViewTutorsMaterials from "../Pages/DashboardPages/ViewTutorsMaterials/ViewTutorsMaterials";
import AdminRoutes from "./AdminRoutes";


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
                element: <ProtectedRoutes><SessionDetails></SessionDetails></ProtectedRoutes>,
                loader: ({ params }) => fetch(`https://learn-together-server-five.vercel.app/details/${params.id}`)
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
    {
        path: "dashboard",
        element: <ProtectedRoutes><Dashboard></Dashboard></ProtectedRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: "profile",
                element: <Profile></Profile>
            },
            {
                path: "booked_sessions",
                element: <ViewBookedSessions></ViewBookedSessions>
            },
            {
                path: "create_notes",
                element: <CreateNotes></CreateNotes>
            },
            {
                path: "manage_notes",
                element: <ManageNotes></ManageNotes>
            },
            {
                path: "view_materials",
                element:  <ViewStudyMaterials></ViewStudyMaterials>
            },

            // Tutor routes 

            {
                path: "create_sessions",
                element: <CreateSessions></CreateSessions>
            },
            {
                path: "my_sessions",
                element: <TutorsStudySessions></TutorsStudySessions>
            },
            {
                path: "upload_materials",
                element: <UploadMaterials></UploadMaterials>
            },
            {
                path: "view_allMaterials",
                element: <ViewTutorsMaterials></ViewTutorsMaterials>
            },

            //admin routes

            {
                path: "allUsers",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: "pendingSessions",
                element: <AdminRoutes><PendingSessions></PendingSessions></AdminRoutes>
            },
            {
                path: "approvedSessions",
                element: <AdminRoutes><ApprovedSessions></ApprovedSessions></AdminRoutes>
            },
            {
                path: "rejectedSessions",
                element: <AdminRoutes><RejectedSessions></RejectedSessions></AdminRoutes>
            },
            {
                path: "allMaterials",
                element: <AdminRoutes><AllMaterials></AllMaterials></AdminRoutes>
            }
        ]
    }
]);