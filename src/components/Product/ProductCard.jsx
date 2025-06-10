import './ProductCard.css'
import IphoneImgSrc from '../../assets/iphone.jpg'
import StartImgSrc from '../../assets/white-star.png'
import BasketImgSrc from "../../assets/basket.png";

const ProductCard = () => {
    return (
        <article className='product_card'>
            <div className="product_image">
                <img src={IphoneImgSrc} alt="" />
            </div>
            <div className="product_details">
                <h3 className="product_price">$999</h3>
                <p className='product_title'>IPhone 14</p>
                <footer className="align_center product_info_footer">
                    <div className="align_center">
                        <p className="align_center product_rating">
                            <img src={StartImgSrc} alt="" /> 5.0
                        </p>
                        <p className='product_review_count'>120</p>
                    </div>
                    <div className="add_to_cart">
                        <img src={BasketImgSrc} alt="" />
                    </div>
                </footer>
            </div>
        </article>
    );
}

export default ProductCard;