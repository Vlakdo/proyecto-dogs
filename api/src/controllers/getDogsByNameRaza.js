require('dotenv').config();
const axios = require("axios");
const { Dogs, Temperaments } = require("../db");
const { DOG_API_KEY } = process.env;

const { Op } = require("sequelize");

const URL = "https://api.thedogapi.com/v1/";

const getDogsByNameRaza = async (req, res) => {
    const { name } = req.query;
    
    try {
        const response = await axios(URL + "breeds/search?q=" + name + "&api_key=" + DOG_API_KEY);

        const dogsArray = response.data;

        const my_DB_Dogs = await Dogs.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: {
                model: Temperaments,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        });

        if(my_DB_Dogs.length){
            const auxDbDogs = my_DB_Dogs.map((dog) => {
                return {
                weight: dog.weight,
                height: dog.height,
                id: dog.id,
                name: dog.name,
                life_span: dog.life_span,
                //temperament: dog.temperaments[0].name,//dog.Temperaments.join(", ")
                temperament: dog.temperaments.map((tempe) => {
                    return tempe.name;
                }).join(", "),
                image: {url: dog.image},
                isDataBase: true
                };
            });
    
        
            const auxData = [...auxDbDogs, ...dogsArray];

            return res.status(200).send(auxData);
        }
        else
        {
            if(dogsArray.length > 0){
                return res.status(200).send(dogsArray);
            } else {
                return  res.status(404).send("Raza no encontrado");
            }
        }

    } catch (error) {
        res.status(500).send("getDogsByNameRaza not found");
    }
    
    /*try {
        res.status(200).send("res: getDogsByNameRaza = " + name);
    } catch (error) {
        res.status(500).send("getDogsByNameRaza not found");
    }*/
}

module.exports = getDogsByNameRaza;