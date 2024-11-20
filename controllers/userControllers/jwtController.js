const jwt = require("jsonwebtoken");

const jwtMiddleWare = function(req,res,next){
    
   const token = req.session.jwt ;
   if(token){
    const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
    if(decoded){
        res.redirect("/home");
    }else{
        
       next();
       
    }
   }else{
    console.log("jwtmiddlware")
    next();
    
   }
}
const allTimeMiddleware = function(req,res,next){
    const token = req.session.jwt;
    if(token){
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
        if(decoded){
            next();
        }else{
            res.redirect("/");
        }
    }else{
        res.redirect("/");
    }
}
module.exports = {
    jwtMiddleWare,
    allTimeMiddleware
}