const express = require("express");
const router = express.Router();
const {loadLoginPage,loadSignupPage} = require("../../controllers/userControllers/authenticationController");


router.route("/").get(loadLoginPage);
router.route("/register").get(loadSignupPage);






module.exports = router;