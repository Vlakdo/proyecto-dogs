import style from "./HomePage.module.css";
import NavBar from "../../components/Nav/NavBar"
import Cards from "../../components/Cards/Cards";
/*import { useState } from 'react';*/
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getDogs, getDogsByName, setFilters } from "../../Redux/actions";

const HomePage = () => {

    //const [dogs, setDogs] = useState([]);
    const dogs = useSelector((state) => state.allDogs);
    /*const filterObject = useSelector((state) => state.filterObject);*/
    //const [aux, setAux] = useState();
    const dispatch = useDispatch();

    const handlerSetFilter = (event) => {
        //console.log("Name: " + event.target.name);
        //console.log("Value: " + event.target.value);
        const aux = {
            [event.target.name]: event.target.value
        };
        dispatch(setFilters(aux));
        //setAux(!aux);
    }

    const onSearchDogs = async (id) => {
        
        if(id !== "")
        {
            dispatch(getDogsByName(id));
        }
        else
        {
            dispatch(getDogs());
        }
    }

    useEffect(() => {
        dispatch(getDogs());
     }, [/*filterObject*/]);

    return (
        <div className={style.homeContainer}>
            <NavBar
                onSearchDogs={onSearchDogs}
                handlerSetFilter={handlerSetFilter}
            />
            <Cards
                dogs={dogs}
            />
        </div>
    );
}

export default HomePage;