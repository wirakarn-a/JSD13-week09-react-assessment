import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
    <div>
        <h1>404 - Page Not Found :singer::skin-tone-2:</h1>
    </div>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "owner", element: <Owner /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}