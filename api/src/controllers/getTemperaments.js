require('dotenv').config();
const axios = require("axios");
const { Temperaments } = require("../db");
const { DOG_API_KEY } = process.env;

const URL = "https://api.thedogapi.com/v1/";

const UnifyTemperamentsAndDeleteDuplicates = (temperamentsArray) => {

    return new Promise((resolve, reject) => {

        let auxArray = [];

        temperamentsArray.forEach(tempe => {
            if(tempe)
            {
                const auxTempeArray = tempe.split(", ");
                auxArray = [...new Set([...auxArray, ...auxTempeArray])]; //new Set() crea un objeto Set, que es una estructura de datos que te permite almacenar valores únicos, es decir, valores que no se pueden repetir en el conjunto.
            }
        });

        let auxArrayObjs = [];
        auxArray.forEach(element => {
            auxArrayObjs.push({name: element});
        });

        resolve(auxArrayObjs);
    });
}

const getTemperaments = async (req, res) => {
    try {
        const temperamentsResult = await Temperaments.findAll({
            /*include: {
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }*/
        });
        //console.log("Result 1: " + temperamentsResult.length);
        if(temperamentsResult.length === 0) {
            //console.log("Entro y creo: ");
            const response = await axios(URL + "breeds?api_key=" + DOG_API_KEY);
            const dogsArray = response.data;
            const auxTemperaments = dogsArray.map(dog => dog.temperament);

            let auxArray = [];
            await UnifyTemperamentsAndDeleteDuplicates(auxTemperaments)
            .then((result) => {
                auxArray = result;
            })
            .catch((error) => console.log(error));

            auxTemperamentsResult = await Temperaments.bulkCreate(auxArray);
            //console.log("Result 2: " + auxTemperamentsResult.length);
            res.status(200).send(auxTemperamentsResult);
        }
        else
        {
            //console.log("Result 3: " + temperamentsResult.length);

            res.status(200).send(temperamentsResult);
        }

        /*auxArray.sort(function(a,b){
            return a.localeCompare(b);
        });*/

    } catch (error) {
        res.status(500).send("getTemperaments not found");
    }
    /*try {
        res.status(200).send("res: getTemperaments");
    } catch (error) {
        res.status(500).send("getTemperaments not found");
    }*/
}

module.exports = getTemperaments;