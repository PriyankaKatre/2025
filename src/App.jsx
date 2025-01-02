
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import { DoctorsSection } from "./components/Doctors-section";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myprofile from "./pages/My-profile";
import MyAppointments from "./pages/My-appointments";
import Login from "./pages/Login";
import Appointments from "./pages/Appointments";

export default function App() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/doctors", element: <Doctors /> },
                { path: "/doctors/:speciality", element: <Doctors /> },
                { path: "/login", element: <Login /> },
                { path: "/about", element: <About /> },
                { path: "/contact", element: <Contact /> },
                { path: "/my-profile", element: <Myprofile /> },
                { path: "/my-appointments", element: <MyAppointments /> },
                { path: "/appointments/:id", element: <Appointments /> },
            ],
        },
    ]);
    return (
        <>
            <main>
                <RouterProvider router={appRouter}></RouterProvider>
            </main>
        </>
    );
}

