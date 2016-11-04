var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burger = require('../models')['burgers'];

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burger.findAll({}).then(function(data){
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	burgers.create(['burger_name'], [req.body.b_name], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;
	console.log('condition ', condition);
	burgers.update({'devoured': req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition',condition);
  burger.delete(condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;
