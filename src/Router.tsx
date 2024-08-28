import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Agents from "./pages/Agents/view";
import ContactUs from "./pages/ContactUs/view";
import IndivisualAgent from "./pages/IndivisualAgent/view";
import Demo from "./pages/Demo/view";

const router = () => {
  const routes = [
    { path: "agents", element: <Agents /> },
    { path: "/agents/:id", element: <IndivisualAgent /> },
    { path: "/agents/:id/demo", element: <Demo /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "*", element: <Navigate to={"/agents"} /> },
  ];
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    )
  );
};

export default function Router() {
  return <RouterProvider router={router()} />;
}
