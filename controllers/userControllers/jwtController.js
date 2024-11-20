const jwt = require("jsonwebtoken");

const jwtMiddleWare = function(req,res,next){
   const token = req.session.jwt ;
   if(token){
    const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
    if(decoded){
        res.redirect("/home");
    }else{
       next();
        return;
    }
   }else{
    next();
    return;
   }
}
module.exports = {
    jwtMiddleWare
}