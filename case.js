const http = require('http');
const uc= require('upper-case');
const lc= require('lower-case');
str="omkar";
http.createServer(function(req,res){
    res.write("Uppercase :"+uc.upperCase(str));
    res.write("Lowercase :"+lc.lowerCase(str));
    res.end();
}).listen(3001);