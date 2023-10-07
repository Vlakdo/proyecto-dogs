//const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getDogs(req, res) {
    try {
        res.status(200).send("res: getDogs");
    } catch (error) {
        res.status(500).send("getDogs not found");
    }
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