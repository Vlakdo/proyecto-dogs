function getDogsByIdRaza(req, res) {
    const { idRaza } = req.params;
    try {
        res.status(200).send("res: getDogsByIdRaza = " + idRaza);
    } catch (error) {
        res.status(500).send("getDogsByIdRaza not found");
    }
}

module.exports = getDogsByIdRaza;