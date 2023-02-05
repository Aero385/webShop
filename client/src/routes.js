import { ADMIN_ROUTE, BASKET_ROUTE } from "./utils/consts";
import Admin from './pages/admin';
import Basket from './pages/basket';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [

]