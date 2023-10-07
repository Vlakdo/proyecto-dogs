function getDogsByNameRaza(req, res) {
    const { name } = req.query;
    try {
        res.status(200).send("res: getDogsByNameRaza = " + name);
    } catch (error) {
        res.status(500).send("getDogsByNameRaza not found");
    }
}

module.exports = getDogsByNameRaza;