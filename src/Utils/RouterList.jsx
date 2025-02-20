import Home from '../Pages/Home'
import Carts from '../Pages/Carts'
import Wishlist from '../Pages/Wishlist'
import Blog from '../Pages/Blog'
import HotOffers from '../Pages/HotOffers'
import Perfume from '../Pages/Perfume'
import Jewelyr from '../Pages/Jewelyr'
import Men from '../Pages/Men'
import Womens from '../Pages/Women'
import Error from '../Pages/Error'
import Checkout from '../Pages/Checkout'
import Clothes from '../Pages/Clothes'
import Footwear from '../Pages/Footwear'
import Cosmetics from '../Pages/Cosmetics'
import Glasses from '../Pages/Glasses'
import Bags from '../Pages/Bags'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Forget from '../Pages/Forget'
import SearchResults from '../Pages/SearchResult'
import Compare from '../Pages/Compare'
import Contact from '../Pages/Contact'
import Service from '../Pages/Service'
import OurCompany from '../Pages/OurCompany'
import Products from '../Pages/Products'
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
    {
        path: "/clothes",
        element: <Clothes />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: "*",
        element: <Error />
    },
    {
        path: "/footwear",
        element: <Footwear />
    },
    {
        path: "/cosmetics",
        element: <Cosmetics />
    },
    {
        path: "glasses",
        element: <Glasses />
    },
    {
        path: "bags",
        element: <Bags />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signUp",
        element: <SignUp />
    },
    {
        path: "/forget",
        element: <Forget />
    }
    ,
    {
        path: "/search",
        element: <SearchResults />
    }
    ,
    {
        path: "/compare",
        element: <Compare />
    }
    ,
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/service",
        element: <Service />
    },
    {
        path: "/our-company",
        element: <OurCompany />
    }
    ,
    {
        path: "/products",
        element: <Products />
    }
]