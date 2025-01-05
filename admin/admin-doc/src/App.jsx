import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import addDoctors from "./pages/Admin/AddDoctors";
import DoctorsList from "./pages/Admin/DoctorsList";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/admin-dashboard", element: <Dashboard /> },
        { path: "/all-appointments", element: <AllAppointments /> },
        { path: "/add-doctors", element: <addDoctors /> },
        { path: "/doctors-list", element: <DoctorsList /> },
      ],
    },
  ]);

  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
