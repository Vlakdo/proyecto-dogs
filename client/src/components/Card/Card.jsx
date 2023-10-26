import style from "./Card.module.css";

const Card = (props) => {
    return (
        <div key={props.id} className={style.card}>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p><span className={style.subrayado}>Temperamento:</span> {props.temperamentos}</p>
            <p className={style.leftParagraph}><span className={style.subrayado}>Peso:</span></p>
            <ul className={style.leftParagraph}>
                <li>Imperial: {props.peso.imperial}</li>
                <li>Metric: {props.peso.metric}</li>
            </ul>
        </div>
    );
}

export default Card;