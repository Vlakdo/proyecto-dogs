require('dotenv').config();
const axios = require("axios");
const { Dogs } = require("../db");
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
            }
        });

        const totalDogsArray = [...dogsArray, ...my_DB_Dogs];

        if(totalDogsArray.length > 0){
            return res.status(200).send(totalDogsArray);
        } else {
            return  res.status(404).send("Raza no encontrado");
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