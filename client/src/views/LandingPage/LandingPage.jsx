import style from "./LandingPage.module.css"
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className={style.landingPage}>
            <h1>HENRY DOGS PI</h1>
            <Link to={`/home`}>
                <button className={style.minimalButton}>
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default LandingPage;