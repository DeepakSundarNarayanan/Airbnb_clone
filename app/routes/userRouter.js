const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const { body, param } = require('express-validator');


router.route("/register").post([
  body('username').trim().notEmpty().withMessage("username should not be empty"),
  //body('lastName').trim().notEmpty(),
  body('email').trim().isEmail().withMessage("email can't be empty"),
  body('password').isLength({ min: 8 }).withMessage("password should be strictly greater than 8 characters"),
],userController.RegisterUser)
router.route("/").get(userController.GetAllUsers)
router.route("/:id").get(userController.GetSingleUser)
router.route("/:id").patch([
  body('username').optional().trim().notEmpty().withMessage("username should not be empty"),
  //body('lastName').trim().notEmpty(),
  body('email').optional().trim().isEmail().withMessage("email can't be empty"),
  body('password').optional().isLength({ min: 8 }).withMessage("password should be strictly greater than 8 characters"),
],userController.UpdateUser)
router.route("/:id").delete(userController.DeleteUser)
module.exports=router
