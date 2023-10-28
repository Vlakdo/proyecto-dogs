import style from "./Card.module.css";
import { Link, NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        
        <div key={props.id} className={style.card}>
            <img src={props.image} alt={props.name} />
            <Link to={`/detail/${props.id}`} >
            <h2> {props.name}</h2>
            </Link>
            <p><span className={style.subrayado}>Temperamento:</span> {props.temperamentos}</p>
            <p className={style.leftParagraph}><span className={style.subrayado}>Peso:</span></p>
            {
                props.peso.imperial !== "" ?
                <ul className={style.leftParagraph}>
                    <li>Imperial: {props.peso.imperial}</li>
                    <li>Metric: {props.peso.metric}</li>
                </ul>
                :
                <ul className={style.leftParagraph}>
                    <li>Metric: {props.peso.metric}</li>
                </ul>
            }
        </div>
    );
}

export default Card;