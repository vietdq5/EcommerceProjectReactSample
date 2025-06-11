import ProductCard from './ProductCard';
import './ProductsList.css'
import useDataHook from '../../hooks/useDataHook';
import ProductLoadingSkeleton from './ProductLoadingSkeleton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Common/Pagination';
import { useState, useEffect } from 'react';

const ProductsList = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useSearchParams();
    const category = search.get("category");
    // const page = search.get("page");
    const { data, error, isLoading } = useDataHook("/products", {
        params: {
            category,
            page,
            perPage: 10
        }
    }, [category, page]);

    useEffect(() => {
        setPage(1);
    }, [category]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (
                scrollTop + clientHeight >= scrollHeight - 1 &&
                !isLoading &&
                data &&
                page < data.totalPages
            ) {
                setPage((prev) => prev + 1);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [data, isLoading]);

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const handlePageChange = (page) => {
    //     const currentParams = Object.fromEntries([...search]);
    //     setSearch({ ...currentParams, page: page })
    // };

    return (
        <section className="products_list_section">
            <header className="align_center products_list_header">
                <h2>Products</h2>
                <select name='sort' id='' className="products_sorting">
                    <option value=''>Relevance</option>
                    <option value='price desc'>Price HIGH to LOW</option>
                    <option value='price asc'>Price LOW to HIGH</option>
                    <option value='rate desc'>Rate HIGH to LOW</option>
                    <option value='rate asc'>Rate LOW to HIGH</option>
                </select>
            </header>

            <div className='products_list'>
                {error && <em className='form_error'>{error}</em>}
                {
                    isLoading && skeletons.map((index) => <ProductLoadingSkeleton key={index} />)
                }
                {
                    data?.products && data?.products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>
            {/* <Pagination totalItems={data?.totalProducts || 0} itemPerPage={data?.postPerPage || 0} handleClick={handlePageChange} currentPage={page} /> */}
        </section>
    );
}

export default ProductsList;