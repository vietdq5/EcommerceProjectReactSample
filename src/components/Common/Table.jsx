import './Table.css'

const Table = ({ headings, children }) => {
    return (
        <table className='common_table'>
            <thead>
                <tr>
                    {
                        headings.map((item, index) => {
                            return (<th className={(index === 0 || index === 1 || index === 2) ? 'col_auto' : 'col_fixed'} key={index}>{item}</th>)
                        })
                    }
                </tr>
            </thead>
            {children}
        </table>
    );
}

export default Table;