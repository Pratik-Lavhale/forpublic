var mysql = require('mysql2'); 
var http = require('http');

var con = mysql.createConnection({
	user: "root",
	password: "Nikhil555@",
	database: "knowit2111",
	host: "localhost"
});

con.connect(function(err){
    if(!err)
	console.log('connected');
    else
	console.log(err.toString());
});

http.createServer(function(req,res){
	if(req.url == '/emps')
        {
		con.query('select * from emp where ENAME="ALLEN"',function(err,result){
			if(!err)
			{
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<table border=1>");
				result.forEach(function(v){
					res.write("<tr>");
					res.write("<td>"+v.EMPNO+"</td>");
					res.write("<td>"+v.ENAME+"</td>");
					res.write("<td>"+v.JOB+"</td>");
					res.write("</tr>")
				});
				res.write("</table>");
				res.end();
			}			
		});
        }    	
}).listen(9000);
console.log('server started on 9000');