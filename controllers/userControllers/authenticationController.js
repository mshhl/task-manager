const { load } = require("mime");

const loadLoginPage = function(req,res){
    console.log("mashallah response successfull")
    res.render("userViews/login");
    
}
// registration logic
const loadSignupPage = function(req,res){
    res.render("userViews/signup");
}
const registerUser = function(req,res){
    console.log("hey hello register user");

    const validateEmail = function(email){
        const  regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email)

    }
    const {fullname,email,password,cfmpassword} = req.body;
   
    if( fullname == ""){
        res.render("userViews/signup",{errorMessage:"Name is not valid"});
        return;
    }else if(!validateEmail(email)){
        console.log("cool email")
        res.render("userViews/signup",{emailError:"Email is not valid"});
        return;
    }else if( password !== cfmpassword){
        console.log("password not match")
           res.render("userViews/signup",{passwordError:"password doesn't match"})
           return;
    }else{
        res.redirect("/");
    }
}
module.exports = {
    loadLoginPage,
    loadSignupPage,
    registerUser
}