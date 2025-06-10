import { useState } from 'react';
import './ProductPageDetail.css'
import QuantityInput from './QuantityInput';

const product = {
    id: 1,
    title: "Product Title",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
    price: 9.99,
    images: [
        "https://news.khangz.com/wp-content/uploads/2022/09/mau-tim-nhe-nhang-thanh-lich-o-phien-ban-iphone-14-va-iphone-14-plus.jpg",
        "https://clickbuy.com.vn/uploads/pro/iphone-14-pro-256gb-cu-dep-99-lg-165805.jpg",
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
        "https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2022_10_28_638025679601068481_iPhone%2014%20(12).jpg",
    ],
    stock: 10,
};

const ProductPageDetail = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    return (
        <section className="align_center single_product">
            <div className="align_center">
                <div className="single_product_thumbnails">
                    {
                        product.images.map((image, index) => {
                            return (
                                <img
                                    src={image}
                                    alt={product.title}
                                    className={selectedImage === index ? "selected_image" : ""}
                                    onClick={() => setSelectedImage(index)}
                                />
                            )
                        })
                    }
                </div>
                <img src={product.images[selectedImage]}
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
                <h2 className='single_product_quantity'>Quantity:</h2>
                <div className='align_center quantity_input'>
                    <QuantityInput />
                </div>
                <button className='search_button add_cart'>Add to Cart</button>
            </div>
        </section>
    );
}

export default ProductPageDetail;