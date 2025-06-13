import './App.css';
import AppRoutingPage from './routing/AppRoutingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useState, useEffect } from 'react';
import { getUser } from "./services/userServices";
import UserContext from "./contexts/userContext";
import CartContext from "./contexts/cartContext";

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
      // getCart();
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
  };

  // update product in cart
  const updateCart = (type, id) => {
    const updateCart = [...cart];
    const productIndex = updateCart.findIndex(
      item => item.product._id === id
    );
    if (productIndex >= 0) {
      //if user increate quantity
      if (type === "increase") {
        updateCart[productIndex].quantity += 1;
        setCart(updateCart);
      }
      if (type === "decrease") {
        updateCart[productIndex].quantity -= 1;
        setCart(updateCart);
      }
    } else {
      // toast notify
    }
  };

  // delete product in cart
  const removeFromCart = (id) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter((item) => item.product._id !== id);
    setCart(newCart);
  };

  return (
    <UserContext.Provider value={user}>
      <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, setCart }}>
        <div className='app'>
          <Navbar />
          <main>
            <AppRoutingPage />
          </main>
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;