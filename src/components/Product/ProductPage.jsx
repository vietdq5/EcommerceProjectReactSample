import './ProductPage.css'
import ProductsList from './ProductsList';
import ProductsSidebar from './ProductsSidebar';

const ProductPage = () => {
    return (
        <section className="products_page">
            <ProductsSidebar />
            <ProductsList />
        </section>
    );
}

export default ProductPage;