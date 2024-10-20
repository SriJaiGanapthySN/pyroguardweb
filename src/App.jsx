import "./App.css";
import AboutUs from "./screens/AboutUs";
import OurTechnology from "./screens/Ourtechnology";
import OurVision from "./screens/OurVision";
import RootPage from "./screens/Rootpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/ourvision",
      element: <OurVision />,
    },
    {
      path: "/ourtechnology",
      element: <OurTechnology />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
