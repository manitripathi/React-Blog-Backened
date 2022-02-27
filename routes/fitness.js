const express = require("express");
const fitnessController = require("../controllers/fitness");
const fitnessRouter= express.Router();

fitnessRouter.route('/')
    .get(fitnessController.fitnessGet);
fitnessRouter.route('/:id')
    .get(fitnessController.fitnessGet);

module.exports = fitnessRouter;