const express= require("express");
const hollywoodController=require("../controllers/hollywood");
const hollywoodRouter=express.Router();

hollywoodRouter.route('/')
    .get(hollywoodController.hollywoodGet);
hollywoodRouter.route('/:id')
    .get(hollywoodController.hollywoodGet);

module.exports =hollywoodRouter;