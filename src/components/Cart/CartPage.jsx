import './CartPage.css'
import remove from "../../assets/remove.png";
import Table from '../Common/Table';
import QuantityInput from '../ProductDetail/QuantityInput';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import { useContext, useEffect, useState } from 'react';

const CartPage = () => {
    const user = useContext(UserContext);
    const { cart, updateCart, removeFromCart, setCart } = useContext(CartContext);
    // hooks
    const [subTotal, setSubTotal] = useState(0);
    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.product.price * item.quantity;
        })

        setSubTotal(total);
    }, [cart]);
    // function
    return (
        <section className="align_center cart_page">
            <div className="align_center user_info">
                <img src={`http://localhost:5000/profile/${user?.profilePic}`} alt="user info" />
                <div className="">
                    <p className="user_name">{user?.name}</p>
                    <p className="user_email">{user?.email}</p>
                </div>
            </div>
            <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
                <tbody>
                    {
                        cart.map(({ product, quantity }) =>
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td className='align_center table_quantity_input'>
                                    <QuantityInput
                                        quantity={quantity}
                                        setQuantity={updateCart}
                                        cartPage={true}
                                        prodictId={product._id}
                                        stock={product.stock}
                                    />
                                </td>
                                <td>${quantity * product.price}</td>
                                <td className="action-cell">
                                    <img src={remove} alt="remove icon" className='cart_remove_icon' onClick={() => removeFromCart(product._id)} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <table className='cart_bill'>
                <tbody>
                    <tr>
                        <td>Sub Total</td>
                        <td>${subTotal}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge</td>
                        <td>$5</td>
                    </tr>
                    <tr className='cart_bill_final'>
                        <td>Total</td>
                        <td>${subTotal + 5}</td>
                    </tr>
                </tbody>
            </table>
            <button className='search_button checkout_button'>Checkout</button>
        </section>
    );
}

export default CartPage;