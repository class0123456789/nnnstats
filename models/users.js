/**
 * Created by M.C on 2017/9/15.
 */
//import bcrypt from "bcrypt"

module.exports = (sequelize,Sequelize) => {
    "use strict";
    const Users = sequelize.define("Users", {

    });
    Users.associate = (models) => {
        //Users.hasMany(models.Tasks);
    };


    return Users;
};
