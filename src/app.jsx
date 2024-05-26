import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer />

  </>
  );
}
