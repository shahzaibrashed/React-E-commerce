import Home from '../Pages/Home'
import Carts from '../Pages/Carts'
import Wishlist from '../Pages/Wishlist'
import Blog from '../Pages/Blog'
import HotOffers from '../Pages/HotOffers'
import Perfume from '../Pages/Perfume'
import Jewelyr from '../Pages/Jewelyr'
import Men from '../Pages/Men'
import Womens from '../Pages/Women'
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
    }, {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/hot-offer",
        element: <HotOffers />
    },
    {
        path: "/perfume",
        element: <Perfume />
    },
    {
        path: "/jewelyr",
        element: <Jewelyr />
    },
    {
        path: "/men",
        element: <Men />
    },
    {
        path: "/women",
        element: <Womens />
    },
]