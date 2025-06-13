import './App.css';
import AppRoutingPage from './routing/AppRoutingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useState, useEffect } from 'react';
import { getUser, getJwt } from "./services/userServices";
import UserContext from "./contexts/userContext";
import CartContext from "./contexts/cartContext";
import { ToastContainer, toast } from "react-toastify";
import setAuthToken from "./utils/setAuthToken";

import {
  addToCartAPI,
  decreaseProductAPI,
  getCartAPI,
  increaseProductAPI,
  removeFromCartAPI,
} from "./services/cartServices";
import "react-toastify/dist/ReactToastify.css";

setAuthToken(getJwt());


const App = () => {

  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const jwtUser = getUser();
    if (jwtUser && Date.now() >= jwtUser.exp * 1000) {
      localStorage.removeItem("token");
      location.reload();
    } else {
      setUser(jwtUser);
    }
  }, []);
  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user]);


  // add product to cart
  const addToCart = (product, quantity) => {
    // get product to update
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id
    );
    // if not existing
    if (productIndex === -1) {
      updatedCart.push({ product: product, quantity: quantity });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }

    setCart(updatedCart);
    // add product to server
    addToCartAPI(product._id, quantity)
      .then(() => {
        toast.success("Product Added Succesfully!");
      })
      .catch(() => {
        toast.error("Failed to add product!");
        setCart(cart);
      });
  };

  // update product in cart
  const updateCart = (type, id) => {
    const oldCart = [...cart];
    const updateCart = [...cart];
    const productIndex = updateCart.findIndex(
      item => item.product._id === id
    );
    if (productIndex >= 0) {
      //if user increate quantity
      if (type === "increase") {
        updateCart[productIndex].quantity += 1;
        setCart(updateCart);
        increaseProductAPI(id).catch(() => {
          toast.error("Something went wrong!");
          setCart(oldCart);
        });
      }
      if (type === "decrease") {
        updateCart[productIndex].quantity -= 1;
        setCart(updateCart);
        decreaseProductAPI(id).catch(() => {
          toast.error("Something went wrong!");
          setCart(oldCart);
        });
      }
    } else {
      toast.error("Product doesn't exist in cart");
    }
  };

  // delete product in cart
  const removeFromCart = (id) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter((item) => item.product._id !== id);
    setCart(newCart);
    removeFromCartAPI(id).catch(() => {
      toast.error("Something went wrong!");
      setCart(oldCart);
    });
  };

  // get cart from api
  const getCart = () => {
    getCartAPI()
      .then((res) => {
        setCart(res.data);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <UserContext.Provider value={user}>
      <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, setCart }}>
        <div className='app'>
          <Navbar />
          <main>
            <ToastContainer position='bottom-right' />
            <AppRoutingPage />
          </main>
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;