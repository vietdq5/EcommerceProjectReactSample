import './Navbar.css';
import LinkWithIcon from './LinkWithIcon';
import RocketImgSrc from '../../assets/rocket.png'
import ProductImgSrc from '../../assets/glowing-star.png'

const Navbar = () => {

    var narLinks = [
        {
            title: "Home",
            link: "/",
            emoji: RocketImgSrc
        },
        {
            title: "Products",
            link: "/",
            emoji: ProductImgSrc
        }
    ];

    return (
        <nav className="align_center navbar">
            <div className="align_center">
                <h1 className='navbar_heading'>ECommerce Sample</h1>
                <form className='align_center navbar_form'>
                    <input type="text" className='navbar_search' />
                    <button type='button' className='navbar_search_button'>Search</button>
                </form>
            </div>
            <div className="align_center navbar_links">
                {
                    narLinks.map(item => {
                        return <LinkWithIcon title={item.title} link={item.link} emoji={item.emoji} />
                    })
                }
                <a href="/cart" className='align_center'>
                    Cart <p className='align_center cart_counts'>0</p>
                </a>
            </div>
        </nav>
    )
};

export default Navbar;