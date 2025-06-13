import ProductCard from '../Product/ProductCard';
import './FeaturedProducts.css'
import useData from '../../hooks/useDataHook'
import ProductCardSkeleton from "../Product/ProductLoadingSkeleton";
// const product = {
//     "reviews": {
//         "rate": 4.2,
//         "counts": 150
//     },
//     "_id": "68490e79ae2dbb3af7015596",
//     "title": "Samsung Galaxy A54",
//     "images": [
//         "samsung-a54-1.jpg",
//         "samsung-a54-2.jpg",
//         "samsung-a54-3.jpg",
//         "samsung-a54-4.jpg"
//     ],
//     "price": 399,
//     "stock": 50
// };
const FeaturedProducts = () => {
    const { data, error, isLoading } = useData("/products/featured");
    const skeletons = [1, 2, 3];
    return (
        <section className='featured_products' >
            <h2>Featured Products</h2>
            {error && <em className='form_error'>{error}</em>}
            {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
            <div className='align_center featured_products_list'>
                {
                    data &&
                    data.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>
        </section>
    );
}

export default FeaturedProducts;