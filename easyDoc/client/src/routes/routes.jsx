/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense  } from 'react';
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Doctors from "@/pages/Doctors";
import Login from "@/pages/Login";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import MyProfile from "@/pages/My-profile";
import MyAppointments from "@/pages/My-appointments";
import Appointments from "@/pages/Appointments";

const LazyLoad = (Component) => { 
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <Component />
        </Suspense>
   )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: LazyLoad(Home) },
            { path: "/doctors", element: LazyLoad(Doctors) },
            { path: "/doctors/:speciality", element: LazyLoad(Doctors) },
            { path: "/login", element: LazyLoad(Login) },
            { path: "/about", element: LazyLoad(About) },
            { path: "/contact", element: LazyLoad(Contact) },
            { path: "/my-profile", element: LazyLoad(MyProfile) },
            {
                path: "/appointments/my-appointments",
                element: LazyLoad(MyAppointments),
            },
            { path: "/appointments/:docId", element: LazyLoad(Appointments) },
        ],
    },
]);


export default appRouter;
