import './Navbar.css';
import LinkWithIcon from './LinkWithIcon';
import RocketImgSrc from '../../assets/rocket.png'
import ProductImgSrc from '../../assets/glowing-star.png'
import { NavLink } from 'react-router-dom';

const navLinks = [
    {
        title: "Home",
        link: "/",
        emoji: RocketImgSrc
    },
    {
        title: "Products",
        link: "/product",
        emoji: ProductImgSrc
    },
    {
        title: "My Order",
        link: "/myorder",
        emoji: ProductImgSrc
    },
    {
        title: "Login",
        link: "/login",
        emoji: ProductImgSrc
    },
    {
        title: "Sign Up",
        link: "/signup",
        emoji: ProductImgSrc
    }
];

const Navbar = () => {

    return (
        <nav className="align_center navbar">
            <div className="align_center">
                <h1 className='navbar_heading'>ECommerce Sample</h1>
                <form className='align_center navbar_form'>
                    <input type="text" className='navbar_search' />
                    <button type='button' className='search_button'>Search</button>
                </form>
            </div>
            <div className="align_center navbar_links">
                {
                    navLinks.map(item => {
                        return <LinkWithIcon key={item.title} title={item.title} link={item.link} emoji={item.emoji} />
                    })
                }
                <NavLink to="/cart" className='align_center'>
                    Cart <p className='align_center cart_counts'>0</p>
                </NavLink>
            </div>
        </nav>
    )
};

export default Navbar;