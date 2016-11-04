// var orm = require('../config/orm.js');

// var burgers = {
// 	all: function(cb){
// 		orm.all('burgers', function(res){
// 			cb(res);
// 		});
// 	},
// 	create: function(col, vals, cb){
// 		orm.create('burgers', col, vals, function(res){
// 			cb(res);
// 		});
// 	},
// 	update: function(objColVals, condition, cb){
// 		orm.update('burgers', objColVals, condition, function(res){
// 			cb(res);
// 		});
// 	},
// 	delete: function (condition, cb){
// 		orm.delete('burgers', condition, function(res){
// 			cb(res);
// 		});
// 	}
// };

// module.exports = burgers;

'use strict';

module.exports = function(sequelize, DataTypes){
	var burgers = sequelize.define('burgers', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		burger_name: {
			type: DataTypes.STRING,
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}, {
		classMethods: {
			associate: function(models){
				//associations can be defined here
			}
		}
	});
	return burgers;
};

