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

