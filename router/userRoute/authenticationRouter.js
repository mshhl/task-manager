const express = require("express");
const router = express.Router();
const {loadLoginPage,loadSignupPage,registerUser} = require("../../controllers/userControllers/authenticationController");


router.route("/").get(loadLoginPage);
router.route("/register").get(loadSignupPage).post(registerUser);






module.exports = router;