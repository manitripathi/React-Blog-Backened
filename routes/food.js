const express = require("express");
const foodController = require("../controllers/food");
const foodRouter= express.Router();

foodRouter.route('/')
    .get(foodController.foodGet);
foodRouter.route('/:id')
    .get(foodController.foodGet);

module.exports = foodRouter;