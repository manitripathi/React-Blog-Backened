const express= require("express");
const blogCategoryController=require("../controllers/blogCategory");
const blogCategoryRouter=express.Router();

blogCategoryRouter.route('/')
    .get(blogCategoryController.blogCategoryGet);

blogCategoryRouter.route('/:id')
    .get(blogCategoryController.blogCategoryGet);

module.exports =blogCategoryRouter;