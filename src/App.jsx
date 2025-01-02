
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/home';

export default function App() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> }
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

