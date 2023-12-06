import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn";
import Home from "../components/Home";
import Profile from "../components/Profile";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <SignIn/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/home",
        element: <Home/>
    },
])