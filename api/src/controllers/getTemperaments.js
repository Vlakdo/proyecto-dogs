function getTemperaments(req, res) {
    try {
        res.status(200).send("res: getTemperaments");
    } catch (error) {
        res.status(500).send("getTemperaments not found");
    }
}

module.exports = getTemperaments;