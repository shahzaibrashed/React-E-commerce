import Home from '../Pages/Home'
import Carts from '../Pages/Carts'
import Wishlist from '../Pages/Wishlist'
export const RouterList = [

   
    {
        path: "/",
        element: <Home />
    }, {
        path: "/carts",
        element: <Carts />
    }, {
        path: "/wishlist",
        element: <Wishlist />
    },
  
]