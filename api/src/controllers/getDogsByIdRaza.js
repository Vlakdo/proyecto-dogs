require('dotenv').config();
const axios = require("axios");
const { Dogs } = require("../db");
const { DOG_API_KEY } = process.env;

const URL = "https://api.thedogapi.com/v1/";

const getDogsByIdRaza = async (req, res) => {
    const { idRaza } = req.params;

    try {
        const response = await axios(URL + "breeds?api_key=" + DOG_API_KEY);

        const dogsArray = response.data;
        let auxDog = dogsArray.find(dog => dog.id.toString() === idRaza);

        if(auxDog){
            return res.status(200).send(auxDog);
        } else {
            auxDog = await Dogs.findOne({
                where: {
                    id: idRaza
                }
            });
            if(auxDog){
                return res.status(200).send(auxDog);
            } else {
                return  res.status(404).send("ID raza no encontrado");
            }
        }

    } catch (error) {
        res.status(500).send("getDogsByIdRaza not found");
    }

    /*try {
        res.status(200).send("res: getDogsByIdRaza = " + idRaza);
    } catch (error) {
        res.status(500).send("getDogsByIdRaza not found");
    }*/
}

module.exports = getDogsByIdRaza;