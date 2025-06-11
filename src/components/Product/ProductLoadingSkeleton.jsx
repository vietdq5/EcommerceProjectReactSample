import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductLoadingSkeleton = () => {
    return (
        <Skeleton className="product_card" width='300px' />
    )
};

export default ProductLoadingSkeleton;