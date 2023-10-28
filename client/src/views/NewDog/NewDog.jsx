import style from "./NewDog.module.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { validate } from "../../scripts/validation";
import { useSelector, useDispatch } from "react-redux";
import { getTemperaments } from "../../Redux/actions";
import { Link } from "react-router-dom";

const NewDog = () => {
  
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  const [razaData, setRazaData] = useState({
      nombre: "",
      alturaMinima: 0,
      alturaMaxima: 0,
      pesoMinimo: 0,
      pesoMaximo: 0,
      aniosMinimo: 0,
      aniosMaximo: 0,
      temperamento: [],
      imagenUrl: ""
  });

  const [errors, setErrors] = useState({
      nombre: "",
      alturaMinima: "",
      alturaMaxima: "",
      pesoMinimo: "",
      pesoMaximo: "",
      aniosMinimo: "",
      aniosMaximo: "",
      temperamento: "",
      imagenUrl: ""
  });

  const handleSelectTempeChange = (event) => {
    const auxArrayData = event.target.value.split("_");
    const auxTempe = {
      name: auxArrayData[0],
      id: auxArrayData[1]
    };
    //console.log("selectedPlatform: " + auxTempe.name);
    if(auxTempe.name != "Seleccionar")
    {
      if (auxTempe && !razaData.temperamento.some(tempe => tempe.id === auxTempe.id)) {
        setRazaData({...razaData, ["temperamento"]: [...razaData.temperamento, auxTempe]});
      }
    }
  };

  
  const handleRemoveTempe = (tempeName) => {
    const updatedTempe = razaData.temperamento.filter((tempe) => tempe.name !== tempeName);
    setRazaData({...razaData, ["temperamento"]: updatedTempe});
  };

  const postNewDog = async (newDogBody) => {
      try {
          const {data} = await axios.post(`http://localhost:3001/dogs`, newDogBody);

          if(data.isCreated)
          {
            window.alert(`¡La raza ${data.dog.name} fue creada con éxito!`);
          }
          else
          {
            window.alert("Ya exite una raza con ese nombre");
          }
          //console.log("Perro con ID: " + JSON.stringify(data));
          /*setDog(data);
          setLoading(false);*/
      } catch (error) {
          window.alert("No es posible conectar con el servidor");
          //console.log("Ya exite una raza con ese nombre");
      }
  }

  const handleChange = (event) => {

    const property = event.target.name;
    const value = event.target.value;

    setRazaData({...razaData, [property]: value});
    validate({...razaData, [property]: value}, setErrors, errors);
}

  const handleSubmit = (event) => {
    event.preventDefault();

    const razaBody = {
        name: razaData.nombre,
        height:{
            imperial: "",
            metric: razaData.alturaMinima + " - " + razaData.alturaMaxima + " cm"
        },
        weight:{
            imperial: "",
            metric: razaData.pesoMinimo + " - " + razaData.pesoMaximo + " kg"
        },
        life_span: razaData.aniosMinimo + " - " + razaData.aniosMaximo + " years",
        temperament: razaData.temperamento.map(tempe => Number(tempe.id)),//[1,3,4,7,20],
        image: razaData.imagenUrl
    };
    console.log("OBJETO PARA ENVIAR: " + JSON.stringify(razaBody));
    postNewDog(razaBody);
  };

  useEffect(() => {
    if(!temperaments.length)
    {
      dispatch(getTemperaments());
    }
 }, []);

  return (
    <div className={style.container}>
      <div>
          <Link to={`/home`}>
              <button className={style.minimalButton}>
                Ir a Home
              </button>
          </Link>
      </div>
      <div>
        <h2>CREAR RAZA</h2>
      </div>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre raza: </label>
            <input
              type="text"
              name="nombre"
              value={razaData.nombre}
              onChange={handleChange}
              required //Indica que este campo es obligatorio
            />
          </div>
          <br/>
          <label htmlFor="altura"><strong>Altura</strong></label>
          <div className="form-group">
            <label htmlFor="alturaMinima">Mínima (cm): </label>
            <input
              type="number"
              name="alturaMinima"
              value={razaData.alturaMinima}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="alturaMaxima">Máxima (cm): </label>
            <input
              type="number"
              name="alturaMaxima"
              value={razaData.alturaMaxima}
              onChange={handleChange}
            />
          </div>
          <br/>
          <label htmlFor="peso"><strong>Peso</strong></label>
          <div className="form-group">
            <label htmlFor="pesoMinimo">Mínimo (kg): </label>
            <input
              type="number"
              name="pesoMinimo"
              value={razaData.pesoMinimo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pesoMaximo">Máximo (kg): </label>
            <input
              type="number"
              name="pesoMaximo"
              value={razaData.pesoMaximo}
              onChange={handleChange}
            />
          </div>
          <br/>
          <label htmlFor="anios"><strong>Años de vida</strong></label>
          <div className="form-group">
            <label htmlFor="anioMinimo">Mínimo (años): </label>
            <input
              type="number"
              name="aniosMinimo"
              value={razaData.aniosMinimo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anioMaximo">Máximo (años): </label>
            <input
              type="number"
              name="aniosMaximo"
              value={razaData.aniosMaximo}
              onChange={handleChange}
            />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="nombre">Imagen url: </label>
            <input
              type="text"
              name="imagenUrl"
              value={razaData.imagenUrl}
              onChange={handleChange}
              required
            />
          </div>
          <br/>
          <label htmlFor="temperamentos">Temperamentos: </label>
          <select name="temperamento" onChange={handleSelectTempeChange} /*value=""*/>
              <option key="Seleccionar" value={"Seleccionar_0"}>
                {"Seleccionar"}
              </option>
              {temperaments.map((tempe) => (
                <option key={tempe.name} value={`${tempe.name}_${tempe.id}`}>
                  {tempe.name}
                </option>
              ))}
          </select>
          <br/>
          <h4>Temperamentos seleccionados:</h4>
          <ul>
            {razaData.temperamento.map((tempe) => (
              <ul key={tempe.id}>
                <button onClick={() => handleRemoveTempe(tempe.name)}>Remover</button>
                {` ${tempe.name}`}
              </ul>
            ))}
          </ul>
          <br/>
          <button type="submit">CREAR</button>
        </form>
      </div>
    </div>
  );
}

export default NewDog;