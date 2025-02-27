
import { RouterProvider } from 'react-router-dom';
import './App.css'
import appRouter from './routes/routes';

export default function App() {
    return (
        <>
            <main>
                <RouterProvider router={appRouter}></RouterProvider>
            </main>
        </>
    );
}

