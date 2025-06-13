
import './QuantityInput.css'

const QuantityInput = ({ quantity, cartPage, prodictId, stock, setQuantity }) => {

    return (
        <>
            <button
                className='quantity_input_button'
                onClick={() => {
                    cartPage ? setQuantity("decrease", prodictId) : setQuantity(quantity - 1)
                }}
                disabled={quantity <= 1}>
                -
            </button>
            <p className='quantity_input_count'>{quantity}</p>
            <button
                className='quantity_input_button'
                onClick={() => {
                    cartPage ? setQuantity("increase", prodictId) : setQuantity(quantity + 1)
                }}
                disabled={quantity >= stock}>
                +
            </button>
        </>
    )
};
export default QuantityInput;