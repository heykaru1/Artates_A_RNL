import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Genders from "./pages/gender/Genders";
const router = createBrowserRouter([
  {
  path: "/", 
  element: <Genders />,
  },
  ]);
const App = () => {
  return <RouterProvider  router={router} />;
};

export default App
