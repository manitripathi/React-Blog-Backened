const express= require("express");
const bollywoodController=require("../controllers/bollywood");
const bollywoodRouter=express.Router();

bollywoodRouter.route('/')
    .get(bollywoodController.bollywoodGet);

bollywoodRouter.route('/:id')
    .get(bollywoodController.bollywoodGet);

module.exports =bollywoodRouter;