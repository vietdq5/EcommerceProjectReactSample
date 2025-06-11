import './Pagination.css'

const Pagination = ({ totalItems, itemPerPage, handleClick, currentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pages.push(i);
    }

    return (
        <>
            {
                pages.length > 1 && <ul className='pagination'>
                    {
                        pages.map((page) =>
                            <li key={page}>
                                <button className={parseInt(currentPage) === page ? 'pagination_button active' : 'pagination_button'}
                                    onClick={() => handleClick(page)}>
                                    {page}
                                </button>
                            </li>
                        )
                    }
                </ul>
            }
        </>
    );
}

export default Pagination;