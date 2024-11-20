const express = require("express");
const router = express.Router();
const {loadLoginPage} = require("../../controllers/userControllers/authenticationController");


router.route("/").get(loadLoginPage);






module.exports = router;