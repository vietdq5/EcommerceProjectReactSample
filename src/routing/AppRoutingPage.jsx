import { Routes, Route } from "react-router-dom";
import HomePage from '../components/Home/HomePage.jsx';
import ProductPage from '../components/Product/ProductPage.jsx';
import ProductPageDetail from '../components/ProductDetail/ProductPageDetail';
import CartPage from '../components/Cart/CartPage.jsx';
import MyOrder from '../components/MyOrder/MyOrder.jsx';
import LoginPage from '../components/Authentication/LoginPage.jsx';
import SignupPage from '../components/Authentication/SignupPage.jsx';
import ProtectedRoute from './ProtectedRoute';
import Logout from '../components/Authentication/Logout';

const AppRoutingPage = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/product/:id' element={<ProductPageDetail />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/cart' element={<CartPage />} />
                <Route path='/myorder' element={<MyOrder />} />
                <Route path='/logout' element={<Logout />} />
            </Route>
        </Routes>
    );
}

export default AppRoutingPage;