import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Layout from "./components/Layout/Layout";
import Services from "./page/services/Services";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,// the constnt components like navbar or footer
        errorElement: <h1>this page is not found error 404</h1>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:"services/:id",
                element:<Services/>
            }
        ]

    }
]);
export default router;