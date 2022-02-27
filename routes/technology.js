const express= require("express");
const technologyController=require("../controllers/technology");
const technologyRouter=express.Router();

technologyRouter.route('/')
    .get(technologyController.technologyGet);

module.exports =technologyRouter;