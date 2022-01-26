var h=require('http');
var ser=h.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'});
res.write("<h3> Hello From Node JS </h3>");
 res.end();
});
ser.listen(9000);
console.log("srever started");