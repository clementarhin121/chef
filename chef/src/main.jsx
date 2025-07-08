import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Products from "./files/products.jsx";
import AboutP from "./files/aboutP.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 note found</div>,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/:product_id",
    element: <AboutP />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
