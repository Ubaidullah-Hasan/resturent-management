import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/User/Login";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDash from "../AdminPage/AdminDash/AdminDash";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: 'contactus',
                element: <ContactUs />,
            },
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: '/shop/:category',
                element: <Shop />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Login />,
            },
            {
                path: '/forgot',
                element: <Login />,
            }
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <AdminDash />,
            },
        ]
    }
]);