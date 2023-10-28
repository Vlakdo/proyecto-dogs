import style from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {

    return (
        <div>
            <div>
                <h2>Ruta de navegación incorrecta...</h2>
            </div>
            <div>
            <Link to={`/home`}>
                <button className={style.minimalButton}>
                    Ir a Home
                </button>
            </Link>
        </div>
    </div>
    );
}

export default Error;