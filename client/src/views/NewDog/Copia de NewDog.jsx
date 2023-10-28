import React, { useState } from 'react';

const NewDog = () => {

  const handleSubmit = (event) => {
    console.log("SUBMIT: " + event.preventDefault());
  }

  const handleChange = (event) => {

    const property = event.target.name;
    const value = event.target.value;
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nombre Raza: </label>
            {/*<br/>*/}
            <input
            type="text"
            name="name"
            //value={userData.email}
            onChange={handleChange}
            />
            {/*<span>{errors.email}</span>*/}
        </div>
        <div>
            <label htmlFor="name">Altura: </label>
            <br/>
            <label htmlFor="alturaMin">Minima: </label>
            <input
            type="number"
            name="alturaMin"
            //value={userData.email}
            onChange={handleChange}
            />
            <label htmlFor="alturaMin">Maxima: </label>
            <input
            type="number"
            name="alturaMin"
            //value={userData.email}
            onChange={handleChange}
            />
            {/*<span>{errors.email}</span>*/}
        </div>
        <div>
          
        </div>
      </form>
    </div>
  );
}

export default NewDog;

/*const NewDog = () => {
  const options = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5", "Opción 6", "Opción 7"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const selected = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedOptions(selected);
  };

  return (
    <div>
      <form>
        <label for="frutas">Selecciona tus frutas favoritas:</label>
        <select name="frutas" id="frutas" multiple>
            <option value="manzana">Manzana</option>
            <option value="banana">Banana</option>
            <option value="uva">Uva</option>
            <option value="naranja">Naranja</option>
            <option value="pera">Pera</option>
        </select>
        
    </form>
    </div>
  );
}

export default NewDog;*/