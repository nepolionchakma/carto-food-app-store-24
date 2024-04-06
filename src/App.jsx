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

function App() {
  const [carts, setCarts] = useState([])
  const addCart = (cart) => {
    setCarts((prev) => ([...prev, { cart }]))
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'))
    if (data && data.length > 0) {
      setCarts(data)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carts))
  }, [carts])

  // Router-------------------------------------
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
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
          path: '/food/details/:idMeal',
          element: <Details />
        },
      ]
    },
  ]);
  return (
    <>
      <CartoProvider value={{ carts, addCart }}>
        <RouterProvider router={router} />
      </CartoProvider>
    </>
  )
}

export default App
