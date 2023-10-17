import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Error from "./pages/NotFound";
import "./styles/globals.scss";
import Faqs from "./pages/Faqs";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
