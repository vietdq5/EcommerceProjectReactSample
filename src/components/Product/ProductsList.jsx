import ProductCard from './ProductCard';
import './ProductsList.css'
import useDataHook from '../../hooks/useDataHook';
import ProductLoadingSkeleton from './ProductLoadingSkeleton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Common/Pagination';
import { useState, useEffect } from 'react';

const ProductsList = () => {
    // hooks
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState("");
    const [sortedProducts, setSortedProducts] = useState([]);
    // search params
    const [search, setSearch] = useSearchParams();
    const category = search.get("category");
    const searchQuery = search.get("search");

    // const page = search.get("page");
    const { data, error, isLoading } = useDataHook("/products", {
        params: {
            category,
            page,
            perPage: 10,
            search: searchQuery,
        }
    }, [searchQuery, category, page]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery, category]);

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

    useEffect(() => {
        if (data && data.products) {
            const products = [...data.products];
            if (sortBy === "price desc") {
                setSortedProducts(products.sort((a, b) => b.price - a.price));
            } else if (sortBy === "price asc") {
                setSortedProducts(products.sort((a, b) => a.price - b.price));
            } else if (sortBy === "rate desc") {
                setSortedProducts(
                    products.sort((a, b) => b.reviews.rate - a.reviews.rate)
                );
            } else if (sortBy === "rate asc") {
                setSortedProducts(
                    products.sort((a, b) => a.reviews.rate - b.reviews.rate)
                );
            } else {
                setSortedProducts(products);
            }
        }
    }, [sortBy, data]);

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const handlePageChange = (page) => {
    //     const currentParams = Object.fromEntries([...search]);
    //     setSearch({ ...currentParams, page: page })
    // };

    return (
        <section className="products_list_section">
            <header className="align_center products_list_header">
                <h2>Products</h2>
                <select name='sort' id='' className="products_sorting" onChange={(e) => setSortBy(e.target.value)}>
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
                    sortedProducts && sortedProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>
            {/* <Pagination totalItems={data?.totalProducts || 0} itemPerPage={data?.postPerPage || 0} handleClick={handlePageChange} currentPage={page} /> */}
        </section>
    );
}

export default ProductsList;