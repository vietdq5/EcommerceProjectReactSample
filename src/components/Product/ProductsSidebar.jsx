import LinkWithIcon from '../Navbar/LinkWithIcon';
import './ProductsSidebar.css'
import useDataHook from '../../hooks/useDataHook';

const ProductsSidebar = () => {
    
    const {data, error} = useDataHook("/category");
    
    return (
        <aside className='products_sidebar'>
            <h2>Categories</h2>
            <div className='category_links'>
                {
                    error && <em className='form_error'>{error}</em>
                }
                {
                    data && data.map(category =>
                        <LinkWithIcon
                            key={category._id}
                            title={category.name}
                            link={`/product?category=${category.name}`}
                            emoji={`http://localhost:5000/category/${category.image}`}
                            sidebar={true}
                        />)
                }
            </div>
        </aside>
    );
}

export default ProductsSidebar;