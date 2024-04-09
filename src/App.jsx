import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import RootComponent from './components/RootComponent/RootComponent';
import Shops from './components/Shops/Shops';
import { CartoProvider, useCarto } from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import AddUser from './components/AddUser/AddUser';
import ErrorPage from './components/404/ErrorPage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  const [carts, setCarts] = useState([])
  const [users, setUsers] = useState([])
  const [paginationItem, setPaginationItem] = useState([])
  // console.log(paginationItem, 'item check app.jsx');
  const addShowPaginationItems = (cartsPagination) => {
    console.log(cartsPagination, 'cartpagination app.jsx');
    setPaginationItem({ cartsPagination })
  }
  const addCart = (cart) => {
    setCarts((prev) => ([...prev, { cart }]))
  }
  const deleteCart = (id) => {
    setCarts((prev) => prev.filter((item) => item.cart.idMeal !== id))
  }

  // Add User
  const addUser = (user) => {
    setUsers((preUser) => [...preUser, user])
  }
  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }
  // item.cart.id !== id
  // useEffect get data to localStorage-----------------------------
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('carts'))
    if (cartData && cartData.length > 0) {
      setCarts(cartData)
    }
    const UserData = JSON.parse(localStorage.getItem('users'))
    if (UserData && UserData.length > 0) {
      setUsers(UserData)
    }
  }, [])
  // set to localstorage
  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts))
  }, [carts])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  // toast
  const addFromCart = () => toast.success('Add success', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const deleteFromCart = () => toast.success('Delete success', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // fav ,cart add
  const [favorite, setFavorite] = useState(false)
  const [cartFav, setCartFav] = useState(false)
  const handleFav = () => {
    setFavorite(!favorite)
  }
  const handleCart = () => {
    setCartFav(!cartFav)
  }
  // Router-------------------------------------
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/shops',
          element: <Shops />
        },
        {
          path: 'details/:idMeal',
          element: <Details />
        },
        {
          path: '/checkout',
          element: <Checkout />
        },
        {
          path: '/adduser',
          element: <AddUser />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    },
  ]);
  return (
    <>
      <CartoProvider value={{ carts, addCart, deleteCart, paginationItem, addShowPaginationItems, handleFav, handleCart, favorite, cartFav, users, addUser, handleDeleteUser, ToastContainer, addFromCart, deleteFromCart }}>
        <RouterProvider router={router} />
        {/* <ToastContainer /> */}
      </CartoProvider>
    </>
  )
}

export default App
