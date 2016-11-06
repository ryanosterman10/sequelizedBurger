'use strict';

var burger = require('../models')["burger"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return burger.bulkCreate([
        {burger_name: "Quarter Pounder with Cheese"},
        {burger_name: "Big Mac"},
        {burger_name: "Whopper"},
        {burger_name: "Baconator"},
        {burger_name: "Whataburger"}
      ])
  },

  down: function (queryInterface, Sequelize) {
    return burger.destroy({where:{burger_name: [
      "Quarter Pounder with Cheese",
      "Big Mac",
      "Whopper",
      "Baconator",
      "Whataburger"
      ]}})
  }
};
