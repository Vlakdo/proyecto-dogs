const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    getDogs,
    getDogsByIdRaza,
    getDogsByNameRaza,
    postDogs,
    getTemperaments
} = require("../controllers");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", getDogs);
router.get("/dogs/:idRaza", getDogsByIdRaza);
router.get("/dog", getDogsByNameRaza);
router.post("/dogs", postDogs);
router.get("/temperaments", getTemperaments);


module.exports = router;