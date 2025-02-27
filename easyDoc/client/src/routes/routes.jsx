/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense  } from 'react';
import MainLayout from '../layout/MainLayout';
const Home = lazy(() => import("../pages/Home"))
const Doctors = lazy(() => import("../pages/Doctors"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Myprofile = lazy(() => import("../pages/My-profile"));
const MyAppointments = lazy(() => import("../pages/My-appointments"));
const Appointments = lazy(() => import("../pages/Appointments"));

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
            { path: "/my-profile", element: LazyLoad(Myprofile) },
            {
                path: "/appointments/my-appointments",
                element: LazyLoad(MyAppointments),
            },
            { path: "/appointments/:docId", element: LazyLoad(Appointments) },
        ],
    },
]);


export default appRouter;
