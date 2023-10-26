import style from "./Pagination.module.css";

const Pagination = (props) => {
    const { currentPage, totalPages, onPageChange } = props;
    const pageNumbers = [];
    
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
        {pageNumbers.map((number) => (
            <button
            key={number}
            onClick={() => onPageChange(number)}
            className={currentPage === number ? style.buttonSelect : style.button}
            >
            {number}
            </button>
        ))}
        </div>
    );
};

export default Pagination;
