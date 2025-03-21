import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./app";
import { Home } from "./pages/home";
import { Mainpage } from "./pages/mainpage";
import { Cart } from "./pages/cart";
import { Account } from "./pages/accounts";
import { Category } from "./pages/category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/main",
        element: <Mainpage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/",
        element: <Category />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);