function postDogs(req, res) {
    const { id, name, test } = req.body;
    try {
        res.status(200).send("res: postDogs = " + id + ", " + name + ", " + test);
    } catch (error) {
        res.status(500).send("postDogs not found");
    }
}

module.exports = postDogs;