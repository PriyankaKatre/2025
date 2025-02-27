import { RouterProvider } from "react-router-dom";
import routes from './routes'


const App = () => {

  return (
    <main>
      <RouterProvider router={routes}></RouterProvider>
    </main>
  );
}

export default App;
