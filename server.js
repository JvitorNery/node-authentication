var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = ('./config/database');//get db config file
var User = require('.)app/models/user');//get the mongoose model
var port = process.env.PORT || 3000;
var jwt = require('')

//get request parameters
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// use the passport packege in application
app.use(passport.initialize());

// rota para localhost:3000
app.get('/',function(req,res){
	res.send('api rodando na porta '+port);
});

app.listen(port);
console.log('api rodando na porta '+port);