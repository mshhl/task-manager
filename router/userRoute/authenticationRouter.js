const express = require("express");
const router = express.Router();
const {loadLoginPage,loadSignupPage,registerUser,userLogin} = require("../../controllers/userControllers/authenticationController");
const {jwtMiddleWare} = require("../../controllers/userControllers/jwtController");
const {loadHome} = require("../../controllers/userControllers/home");


router.route("/").get(jwtMiddleWare,loadLoginPage).post(userLogin);
router.route("/register").get(loadSignupPage).post(registerUser);
router.route("/home").get(loadHome);






module.exports = router;