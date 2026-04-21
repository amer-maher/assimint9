import { createBrowserRouter} from 'react-router-dom'
import Home from './components/Page/Home/Home';
const router = createBrowserRouter([
{
    path:'/',
    errorElement:<h1>error 404 the page not found</h1>,
    children:[
        {
            index:true,
            element:<Home/>
        },

    ]
}
]);
export default router;