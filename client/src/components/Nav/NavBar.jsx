import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect } from "react";
//import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//import axios from 'axios';
import { getTemperaments } from "../../Redux/actions";

const NavBar = (props) => {

    const { onSearchDogs, handlerSetFilter } = props;
    //const [temperaments, setTemperaments] = useState([]);
    const temperaments = useSelector((state) => state.temperaments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments());
     }, []);

    return (
        <div className={style.NavBarContainer}>
            <div>
                <SearchBar onSearchDogs={onSearchDogs}/>
            </div>
            <div className={style.NavBarFilters}>
                <div>
                    <label htmlFor="temperaments">Temperamentos: </label>
                    <select name="temperamentOrder" onChange={handlerSetFilter}>
                        <option value="none">None</option>
                        {
                            temperaments.map((tempe) => {
                                return (
                                    <option value={tempe.name}>{tempe.name}</option>
                                );
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="Origen">Origen: </label>
                    <select name="origen" onChange={handlerSetFilter}>
                        <option value="none">None</option>
                        <option value="API">API</option>
                        <option value="DB">DB</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Orden">Orden: </label>
                    <select name="order" onChange={handlerSetFilter}>
                        <option value="none">None</option>
                        <option value="R_A">Raza ascendente</option>
                        <option value="R_D">Raza descendente</option>
                        <option value="P_A">Peso ascendente</option>
                        <option value="P_D">Peso descendente</option>
                    </select>
                </div>
                <div>
                    <Link to={`/createDog`}>
                        <button className={style.minimalButton}>
                            Añadir raza
                        </button>
                    </Link>
                </div>
                {/*<div>
                    <label htmlFor="Raza">Raza: </label>
                    <select onChange={handlerSetFilter}>
                        <option value={`{"razaOrder": "none"}`}>None</option>
                        <option value={`{"razaOrder": "A"}`}>Ascendente</option>
                        <option value={`{"razaOrder": "D"}`}>Descendente</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Peso">Peso: </label>
                    <select onChange={handlerSetFilter}>
                        <option value={`{"weightOrder": "none"}`}>None</option>
                        <option value={`{"weightOrder": "A"}`}>Ascendente</option>
                        <option value={`{"weightOrder": "D"}`}>Descendente</option>
                    </select>
                    </div>*/}
            </div>
        </div>
    );
}

export default NavBar;