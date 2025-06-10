import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import './HomePage.css'
import IPhoneImg from '../../assets/iphone-14-pro.webp'
import MacImg from '../../assets/mac-system-cut.jfif'

const HomePage = () => {
    return (
        <div>
            <HeroSection
                title='Bye Iphone 14 prod'
                subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever.'
                link='/'
                image={IPhoneImg}
            />
            <FeaturedProducts />
            <HeroSection
                title='Build the ultimate setup'
                subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever.'
                link='/'
                image={MacImg}
            />
        </div>
    );
}

export default HomePage;