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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Clothing } from "./pages/categories/Clothing";
import { Electronics } from "./pages/categories/Electronics";
import { BeautyHealth } from "./pages/categories/Beauty_Health";
import { Hoimat } from "./pages/categories/Hoimat";
import { Gifts } from "./pages/categories/Gifts";

const queryClient = new QueryClient();

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
        path: "/clothing",
        element: <Clothing/>,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/beautyhealth",
        element: <BeautyHealth />,
      },
      {
        path: "/gifts",
        element: <Gifts />,
      },
      {
        path: "/hoam",
        element: <Hoimat />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </QueryClientProvider>
);