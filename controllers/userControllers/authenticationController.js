const { load } = require("mime");
const bcrypt = require("bcrypt");
const {LocalStorage} = require("node-localstorage");
const localStorage = new LocalStorage('./scratch')

const loadLoginPage = function(req,res){
    console.log("mashallah response successfull")
    res.render("userViews/login");
    
}
// registration logic
const loadSignupPage = function(req,res){
    res.render("userViews/signup");
}
const registerUser = async function(req,res){
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
       
        const npassword = await bcrypt.hash(password,10);
        const object = {
            fullname,
            email,
            password:npassword
        }
        
        
        const custArray = localStorage.getItem("customers")
        if(custArray){
            const customerArray = localStorage.getItem("customers")

            if(customerArray){
                
                const parseArray  = JSON.parse(customerArray)
                
                for(let userobj of parseArray){
                    
                    if(userobj.fullname === fullname || userobj.email === email){
                        res.render("userViews/signup",{userExist:"User already exist"});
                        return;
                    }
                }
                parseArray.push(object);
                localStorage.setItem("customers",JSON.stringify(parseArray));
                res.redirect("/");
    
               
    
            
        }

        }else{
            const customerArray = [];
             customerArray.push(object);
            localStorage.setItem("customers",JSON.stringify(customerArray));
            res.redirect("/");
        }
        
        
        
 }
}
module.exports = {
    loadLoginPage,
    loadSignupPage,
    registerUser
}