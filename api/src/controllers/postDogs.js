require('dotenv').config();
const axios = require("axios");
const { Dogs } = require("../db");
const { DOG_API_KEY } = process.env;

const URL = "https://api.thedogapi.com/v1/";

const postDogs = async (req, res) => {
    const { name, height, weight, life_span, image, temperament } = req.body;
    
    try {
        const [dog, created] = await Dogs.findOrCreate({
            where: {
                name: name
            },
            defaults: {
                height: height,
                weight: weight,
                life_span: life_span,
                image: image
            }
        });

        const auxResult = {
            isCreated: created,
            dog: dog
        };

        return res.status(200).send(auxResult);

    } catch (error) {
        res.status(500).send("postDogs not found");
    }
    
    /*try {
        res.status(200).send("res: postDogs = " + id + ", " + name + ", " + test);
    } catch (error) {
        res.status(500).send("postDogs not found");
    }*/
}

module.exports = postDogs;