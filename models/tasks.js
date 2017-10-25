/**
 * Created by M.C on 2017/9/15.
 */
module.exports = (sequelize, Sequelize) => {
    "use strict";
    const Tasks = sequelize.define('tasks', {
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      deadline: Sequelize.DATE
    });
    Tasks.associate = (models) => {
        //Tasks.belongsTo(models.Users);
    };
    return Tasks;
};
