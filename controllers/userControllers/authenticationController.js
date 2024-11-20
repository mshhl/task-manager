const { load } = require("mime");

const loadLoginPage = function(req,res){
    console.log("mashallah response successfull")
    res.render("userViews/login");
    
}
const loadSignupPage = function(req,res){
    res.render("userViews/signup");
}
module.exports = {
    loadLoginPage,
    loadSignupPage
}