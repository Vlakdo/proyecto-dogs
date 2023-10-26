import style from "./Cards.module.css";
import { useState } from 'react';
import { useEffect } from 'react';
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const Cards = (props) => {

    const { dogs } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = dogs.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        setCurrentPage(1);
        /*return () => {
            handlePageChange(1);
        };*/
    }, [dogs]);

    return (
        <div className={style.cardsContainer}>
            <div className={style.cards}>
            {
                currentCards.map((dog) => {
                    if(dog.hasOwnProperty("image")){
                        return(
                            <Card 
                            id={dog.id}
                            image={dog.image.url}
                            name={dog.name}
                            temperamentos={dog.temperament}
                            peso={dog.weight}
                            />
                        );
                    }
                })
            }
            </div>
            <div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(dogs.length / cardsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default Cards;