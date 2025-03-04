import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layout/mainLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import DoctorsList from "./pages/Admin/DoctorsList";
import AddDoctors from "./pages/Admin/AddDoctors";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/admin-dashboard", element: <Dashboard /> },
      { path: "/all-appointments", element: <AllAppointments /> },
      { path: "/add-doctors", element: <AddDoctors /> },
      { path: "/doctors-list", element: <DoctorsList /> },
    ],
  },
]);

export default appRouter;
