import Home from "Paginas/Home";
import Login from "Paginas/Login";
import {
  createHashRouter,
} from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home-interna",
    element: <Home />
  }
]);


export default router;