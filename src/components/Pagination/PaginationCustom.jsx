
import { useCarto } from '@/Context/CartContext';
import { useEffect, useState } from 'react';

const PaginationCustom = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const { addShowPaginationItems } = useCarto()
    const itemPerPage = 5;
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const showDataPerPage = data?.slice(firstIndex, lastIndex);
    const numerOfPage = Math.ceil(data.length / itemPerPage);
    const numbers = [...Array(numerOfPage + 1).keys()].slice(1);

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const changeNumberPage = (num) => {
        setCurrentPage(num)
    }
    const nextPage = () => {
        if (currentPage !== numerOfPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        console.log(showDataPerPage, '------------1 paginationcustom');
        addShowPaginationItems(showDataPerPage)
        console.log(showDataPerPage, '------------------- paginationcustom');
    }, [])
    return (
        <div>
            <ul>
                <li><a href="#" onClick={previousPage}>Prev</a></li>
                {
                    numbers.map(number => (
                        <li className={`${currentPage === number ? 'active' : ''}`}><a href="#" onClick={() => changeNumberPage(number)}>{number}</a></li>
                    ))
                }
                <li><a href="#" onClick={nextPage}>Next</a></li>
            </ul>
        </div>
    );
};

export default PaginationCustom;