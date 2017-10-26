'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type:Sequelize.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      password: {
          type:Sequelize.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      email: {
          type:Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
