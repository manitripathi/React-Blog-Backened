const express= require("express");
const bollywoodRouter = require("./bollywood");
const hollywoodRouter = require("./hollywood");
const fitnessRouter = require("./fitness");
const foodRouter = require("./food");
const technologyRouter = require("./technology");
const blogCategoryRouter = require("./blogCategory");
const homeRouter = require('./home');

const router=express.Router();

router.use("/bollywood",bollywoodRouter);
router.use("/hollywood",hollywoodRouter);
router.use("/fitness",fitnessRouter);
router.use("/food",foodRouter);
router.use("/technology",technologyRouter);
router.use("/blogCategory",blogCategoryRouter);
router.use("/home",homeRouter);

module.exports = router;