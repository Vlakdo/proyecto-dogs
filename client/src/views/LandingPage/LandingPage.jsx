import style from "./LandingPage.module.css"
import React from "react";

const LandingPage = () => {

    const handleHomePage = () => {
        console.log("Press: Home page");
     }

    return (
        <div className={style.landingPage}>
            <h1>Landing Henry Dogss</h1>
            <button className={style.minimalButton} onClick={handleHomePage}>home page</button>
        </div>
    );
};

export default LandingPage;