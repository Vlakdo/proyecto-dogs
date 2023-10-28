import { useState } from 'react';

const SearchBar = (props) => {

    const {onSearchDogs} = props;

    const [id, setId] = useState("");

    const handleChange = (event) => {
        setId(event.target.value);
    }

    return (
        <div>
            <input type='search' onChange={handleChange}/>
            <button onClick={() => onSearchDogs(id)}>Filtrar</button>
        </div>
    );
}

export default SearchBar;