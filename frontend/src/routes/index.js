import Home from "../pages/Home";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
    private: false,
  },
  {
    path: "/login",
    element: <Home />,
    private: false,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    private: true,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    private: false,
  },
];
