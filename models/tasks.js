'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    title: DataTypes.STRING(30),
    done: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {

            Tasks.belongsTo(models.Users);

        // associations can be defined here
      }
    }
  });
  return Tasks;
};
