const express = require("express");
const router = express.Router();
const {loadLoginPage,loadSignupPage,registerUser,userLogin} = require("../../controllers/userControllers/authenticationController");
const {jwtMiddleWare,allTimeMiddleware} = require("../../controllers/userControllers/jwtController");
const {loadHome} = require("../../controllers/userControllers/home");


router.route("/").get(jwtMiddleWare,loadLoginPage).post(userLogin);
router.route("/register").get(jwtMiddleWare,loadSignupPage).post(registerUser);
router.route("/home").get(allTimeMiddleware,loadHome);






module.exports = router;