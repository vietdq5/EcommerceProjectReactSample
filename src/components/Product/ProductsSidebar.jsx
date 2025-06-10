import LinkWithIcon from '../Navbar/LinkWithIcon';
import rocket from "../../assets/rocket.png";
import './ProductsSidebar.css'

const ProductsSidebar = () => {
    return (
        <aside className='products_sidebar'>
            <h2>Categories</h2>
            <div className='category_links'>
                <LinkWithIcon
                    title='Electronics'
                    link='product?category=electronics'
                    emoji={rocket}
                    sidebar={true}
                />
            </div>
        </aside>
    );
}

export default ProductsSidebar;