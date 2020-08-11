// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function(req, res) {
// 	console.log(req.url)
// 	if (req.url === '/index' || req.url === '/'){
// 		res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
// 		fs.createReadStream(__dirname + '/index.html').pipe(res)
// 	} 
	
// })
// server.listen(3000, "127.0.0.1")

const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/'))

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html')
});

app.get('/index',function(req, res){
	res.sendFile(__dirname + '/index.html')
});

app.get('/orders',function(req, res){
	res.sendFile(__dirname + '/orders.html')
});

app.get('/form',function(req, res){
	res.sendFile(__dirname + '/form.html')
});

app.listen(3000);

