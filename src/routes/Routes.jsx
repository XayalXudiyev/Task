import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/productDetails/ProductDetail";

export const appRoutes = [
    {
        path: '/',
        name: "Home",
        element: <Home />,
    },
    {
        path: '/products',
        name: "Products",
        element: <Products />,
    },
    {
        path: '/products/:id',
        name: "Product",
        element: <ProductDetails/>,
    },
    {
        path: '/cart',
        name: "Cart",
        element: <Cart />,
    },

]
