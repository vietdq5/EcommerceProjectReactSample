
import './QuantityInput.css'
import { useState, memo } from 'react';

const QuantityInput = memo(({ stock }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        if (value >= 1 && value <= stock) {
            setQuantity(value);
        }
    };
    return (
        <>
            <button
                className='quantity_input_button'
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}>
                -
            </button>
            <p className='quantity_input_count'>{quantity}</p>
            <button
                className='quantity_input_button'
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= stock}>
                +
            </button>
        </>
    )
});
export default QuantityInput;