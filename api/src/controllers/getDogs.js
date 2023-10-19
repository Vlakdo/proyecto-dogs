require('dotenv').config();
const axios = require("axios");
//const { response } = require('express');

const URL = "https://api.thedogapi.com/v1/";

const { DOG_API_KEY } = process.env;

const getDogs = async (req, res) => {
  try {
    const response = await axios(URL + "breeds?api_key=" + DOG_API_KEY);

    return res.status(200).send(response.data);

  } catch (error) {
      res.status(500).send("getDogs not found");
  }

  /*try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds?api_key=live_fPmyMAMheszMOOTPw0ANh4MqLhRXNS2kfHaUDTBETtlz1W9uuEZ846vopnZRXF8h");

    const auxData = await response.json();
    
    return res.status(200).send(auxData);
    //return res.status(200).send(response);

  } catch (error) {
      res.status(500).send("getDogs not found");
  }*/
    /*fetch("https://api.thedogapi.com/v1/breeds?api_key=live_fPmyMAMheszMOOTPw0ANh4MqLhRXNS2kfHaUDTBETtlz1W9uuEZ846vopnZRXF8h")
    .then((response) => response.json())
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send("getDogs not found"));*/
    /*try {
        res.status(200).send("res: getDogs");
    } catch (error) {
        res.status(500).send("getDogs not found");
    }*/
  /*const { id } = req.params;
  axios
    .get(URL + id).then((response) => {
      if (response.status === 200) {
        const { id, name, gender, species, origin, image, status } =
          response.data;
        res.json({ id, name, gender, species, origin, image, status });
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((error) => res.status(500).json({message: error.message}));*/
}

module.exports = getDogs;