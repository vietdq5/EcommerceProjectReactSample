import './CartPage.css'
import remove from "../../assets/remove.png";
import user from "../../assets/user.webp";
import Table from '../Common/Table';
import QuantityInput from '../ProductDetail/QuantityInput';

const CartPage = () => {
    return (
        <section className="align_center cart_page">
            <div className="align_center user_info">
                <img src={user} alt="user info" />
                <div className="">
                    <p className="user_name">Tesst</p>
                    <p className="user_email">Testdemo@gmail.com</p>
                </div>
            </div>
            <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
                <tbody>
                    <tr>
                        <td>IPhone 14</td>
                        <td>$999</td>
                        <td className='align_center table_quantity_input'>
                            <QuantityInput />
                        </td>
                        <td>$999</td>
                        <td  className="action-cell">
                            <img src={remove} alt="remove icon" className='cart_remove_icon' />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <table className='cart_bill'>
                <tbody>
                    <tr>
                        <td>Sub Total</td>
                        <td>$999</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge</td>
                        <td>$5</td>
                    </tr>
                    <tr className='cart_bill_final'>
                        <td>Total</td>
                        <td>$1004</td>
                    </tr>
                </tbody>
            </table>
            <button className='search_button checkout_button'>Checkout</button>
        </section>
    );
}

export default CartPage;