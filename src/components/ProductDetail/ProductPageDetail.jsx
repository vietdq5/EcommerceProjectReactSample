import { useContext, useState } from 'react';
import './ProductPageDetail.css'
import QuantityInput from './QuantityInput';
import useDataHook from '../../hooks/useDataHook';
import { useParams } from 'react-router-dom';
import Loader from '../Common/Loader'
import UserContext from "../../contexts/UserContext";
import CartContext from '../../contexts/CartContext';
// const product = {
//     id: 1,
//     title: "Product Title",
//     description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
//     price: 9.99,
//     images: [
//         "https://news.khangz.com/wp-content/uploads/2022/09/mau-tim-nhe-nhang-thanh-lich-o-phien-ban-iphone-14-va-iphone-14-plus.jpg",
//         "https://clickbuy.com.vn/uploads/pro/iphone-14-pro-256gb-cu-dep-99-lg-165805.jpg",
//         "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
//         "https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2022_10_28_638025679601068481_iPhone%2014%20(12).jpg",
//     ],
//     stock: 10,
// };

const ProductPageDetail = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const user = useContext(UserContext);
    const {addToCart} = useContext(CartContext);
    const { id } = useParams();
    const { data: product, error, isLoading } = useDataHook(`/products/${id}`);

    return (
        <section className="align_center single_product">
            {error && <em className='form_error'>{error}</em>}
            {isLoading && <Loader />}
            {
                product && (
                    <>
                        <div className="align_center">
                            <div className="single_product_thumbnails">
                                {
                                    product.images.map((image, index) => {
                                        return (
                                            <img
                                                key={image}
                                                src={`http://localhost:5000/products/${image}`}
                                                alt={product.title}
                                                className={selectedImage === index ? "selected_image" : ""}
                                                onClick={() => setSelectedImage(index)}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <img src={`http://localhost:5000/products/${product.images[selectedImage]}`}
                                className='single_product_display'
                                alt="" />
                        </div>

                        <div className="single_product_details">
                            <h1 className='single_product_title'>{product.title}</h1>
                            <p className='single_product_description'>
                                {product.description}
                            </p>
                            <p className="single_product_price">
                                ${product.price.toFixed(2)}
                            </p>
                            {
                                user && (
                                    <>
                                        <h2 className='single_product_quantity'>Quantity:</h2>
                                        <div className='align_center quantity_input'>
                                            <QuantityInput
                                                quantity={quantity}
                                                setQuantity={setQuantity}
                                                stock={product.stock} />
                                        </div>
                                        <button className='search_button add_cart' onClick={() => addToCart(product, quantity)}>Add to Cart</button>
                                    </>
                                )
                            }

                        </div>
                    </>
                )
            }
        </section>
    );
}

export default ProductPageDetail;