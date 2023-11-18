import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

import LogIn from "../Pages/LogIn/LogIn";
import Packages from "../Pages/Packages/Packages";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../SignUp/SignUp";


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
                path: "about",
                element: <About></About>
            }
            , {
                path: "login",
                element: <LogIn></LogIn>
            },
            , {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "packages",
                element: <PrivateRoute>   <Packages></Packages>   </PrivateRoute>
            },

        ]
    },
]);
