import Sequelize from "sequelize"
module.exports = (sequelize, Sequelize ) => {
    "use strict";
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };
    return Tasks;
};
