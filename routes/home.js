const express = require("express");
const homeController = require("../controllers/home");
const homeRouter= express.Router();

homeRouter.route('/')
    .get(homeController.homeGet);
homeRouter.route('/:id')
    .get(homeController.homeGet);

module.exports = homeRouter;