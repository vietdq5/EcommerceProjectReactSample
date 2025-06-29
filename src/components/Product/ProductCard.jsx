import './ProductCard.css'
import StartImgSrc from '../../assets/white-star.png'
import BasketImgSrc from "../../assets/basket.png";
import { NavLink } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const user = useContext(UserContext);
    return (
        <article className='product_card'>
            <div className="product_image">
                <NavLink to={`/product/${product._id}`}>
                    <img src={`http://localhost:5000/products/${product.images[0]}`} alt="" />
                </NavLink>
            </div>
            <div className="product_details">
                <h3 className="product_price">${product.price}</h3>
                <p className='product_title'>{product.title}</p>
                <footer className="align_center product_info_footer">
                    <div className="align_center">
                        <p className="align_center product_rating">
                            <img src={StartImgSrc} alt="" /> {product.reviews.rate}
                        </p>
                        <p className='product_review_count'>{product.reviews.counts}</p>
                    </div>
                    {
                        (product?.stock || 0) > 0 && user && (
                            <button className="add_to_cart"
                                onClick={() => addToCart(product, 1)}>
                                <img src={BasketImgSrc} alt="" />
                            </button>
                        )
                    }
                </footer>
            </div>
        </article>
    );
}

export default ProductCard;