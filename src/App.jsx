import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './components/Home/HomePage';
import ProductPage from './components/Product/ProductPage.jsx';
import ProductPageDetail from './components/ProductDetail/ProductPageDetail';
import CartPage from './components/Cart/CartPage.jsx';
import MyOrder from './components/MyOrder/MyOrder.jsx';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductPage /> */}
        {/* <ProductPageDetail /> */}
        {/* <CartPage /> */}
        <MyOrder />
      </main>
    </div>
  );
}

export default App;