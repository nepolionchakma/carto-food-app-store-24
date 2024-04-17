import { useEffect, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import './App.css';
import { CartoProvider } from './Context/CartContext';
import ErrorPage from './components/404/ErrorPage';
import AddUser from './components/AddUser/AddUser';
import Checkout from './components/Checkout/Checkout';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import RootComponent from './components/RootComponent/RootComponent';
import Shops from './components/Shops/Shops';
import { supabase } from './Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignUpLogIn from './components/SignUpLogIn/SignUpLogIn';
import { AuthProvider } from './Context/AuthContext';
import Profile from './components/Profile/Profile';

function App() {
  const [carts, setCarts] = useState([])
  const [users, setUsers] = useState([])
  const [paginationItem, setPaginationItem] = useState([])
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // get session
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    setLoading(false);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
  console.log(user?.user_metadata?.full_name)

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
  // Auth
  const register = async (fullName, email, password) => {
    try {

      const { data, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
          options: {
            data: {
              full_name: fullName,
            }
          }
        }
      )
      if (data) {

      }
      if (error) return alert(error);
      return data
    } catch (error) {
      console.log(error);
    }
  }
  const logIn = async (email, password) => {
    try {


      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if (error) throw error
      return data
    } catch (error) {
      throw error
    }
  }
  const logOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
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
          path: '*',
          element: <ErrorPage />,
        },
        {
          path: '/register',
          element: <SignUpLogIn />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/shops',
          element: <Shops />
        },
        {
          path: 'details/:idMeal',
          element: <Details />,
          errorElement: <ErrorPage />,
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
        <AuthProvider value={{ register, logIn, user, logOut }}>
          <RouterProvider router={router} />
        </AuthProvider>
      </CartoProvider>
    </>
  )
}

export default App
