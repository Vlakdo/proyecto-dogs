import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {

    const { id } = useParams();
    const [dog, setDog] = useState({});
    const [loading, setLoading] = useState(true);

    const GetDogWithId = async (auxId) => {
        try {
            const {data} = await axios(`http://localhost:3001/dogs/${auxId}`);
            console.log("Perro con ID: " + JSON.stringify(data));
            setDog(data);
            setLoading(false);
        } catch (error) {
            //window.alert(error.response.data.message);
            console.log("No existe perro con ese ID");
        }
    }

    useEffect(() => {
        GetDogWithId(id);
     }, [id]);

    return (
        loading ? (<h1>Loading...</h1>) : (
            <div className={style.container}>
                <div>
                    <Link to={`/home`}>
                        <button className={style.minimalButton}>
                            Back Home
                        </button>
                    </Link>
                </div>
                <div key={dog.id} className={style.infoContainer}>
                        <h2>{dog.name}</h2>
                        <img src={dog.image.url} alt={dog.name} />
                        <p><span className={style.subrayado}>ID:</span> {dog.id}</p>
                        <p><span className={style.subrayado}>Temperamento:</span> {dog.temperament}</p>
                        <p className={style.leftParagraph}><span className={style.subrayado}>Peso:</span></p>
                        <ul className={style.leftParagraph}>
                            <li>Imperial: {dog.weight.imperial}</li>
                            <li>Metric: {dog.weight.metric}</li>
                        </ul>
                        <p className={style.leftParagraph}><span className={style.subrayado}>Altura:</span></p>
                        <ul className={style.leftParagraph}>
                            <li>Imperial: {dog.height.imperial}</li>
                            <li>Metric: {dog.height.metric}</li>
                        </ul>
                        <p><span className={style.subrayado}>Años de vida:</span> {dog.life_span}</p>
                </div>
            </div>
        )
    );
}

export default Detail;