//import Sequelize from "sequelize"
module.exports = (sequelize, Sequelize )  => {
    "use strict";
    const Users = sequelize.define("Users", {
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
    Users.associate = (models) => {
        Users.hasMany(models.Tasks);
    };


    return Users;
};
