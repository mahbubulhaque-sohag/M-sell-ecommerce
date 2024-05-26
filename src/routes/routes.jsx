import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import DashBoardLayout from "../layouts/DashBoardLayout";
import DashboardHome from "../components/Dashboard/DashboardHome";
import AddProduct from "../components/Dashboard/AddProduct";
import AllProducts from "../components/Dashboard/AllProducts";
import EditProduct from "../components/Dashboard/EditProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    
    {
        path: '/dashboard',
        element: <DashBoardLayout />,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
            {
                path: 'addProduct',
                element: <AddProduct />
            },
            {
                path: 'allProducts',
                element: <AllProducts/>
            },
            {
                path: "/dashboard/editProduct/:id",
                element: <EditProduct/>,
              },
        ]
    }
])