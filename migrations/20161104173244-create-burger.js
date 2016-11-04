'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('burgers', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burger_name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      date: {
        type: Sequelize.TIME
      },
      creatd_at: {
        type: DataTypes.STRING,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  },

  down: function (queryInterface, Sequelize) {
   return queryInterface.dropTable('burgers'); 
  }
};
