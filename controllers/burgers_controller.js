var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burger = require('../models')['burger'];

burger.sync({force:true});

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burger.findAll({}).then(function(data){
		res.render('index', {
			burgers: data
		});
	});
});

router.post('/create', function(req, res){
	burger.create({ burger_name: req.body.b_name }).then(function(){
		res.redirect('/burgers')
	});
});

router.put('/update/:id', function(req, res){
	var condition = req.params.id;
	console.log('condition ', condition);
	burger.update({
		devoured: true
	},
	{
		where: {
			id: condition
		}
	}).then(function(){
		res.redirect('/burgers');
	});
});


module.exports = router;
