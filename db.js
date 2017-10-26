/**
 * Created by M.C on 2017/9/15.
 */
import fs from "fs"
import path from "path"
import Sequelize from "sequelize"

let db ={};


module.exports = app => {
    "use strict";
    if (!db) {
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        //db = {
            //sequelize,
            //Sequelize,
            //models: {}
        //};
        //var basename  = path.basename(__filename);
        //console.log(basename);
        const dir = path.join(__dirname, "models");
          console.log(dir);
        fs
        .readdirSync(dir)
        .filter(file => {
            //if((file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js')){
            //              console.log(file);
            //}

            return (file.indexOf('.') !== 0) && (file !== 'index.js')  && (file.slice(-3) === '.js');
          })
        .forEach(file => {
            const modelDir = path.join(dir, file);

            //const model = sequelize.import(modelDir);
            const model = sequelize['import'](modelDir);
              console.log(model);
            //db.models[model.name] = model;
            db[model.name] = model;
          //var model = sequelize['import'](path.join(__dirname, file));
          //db[model.name] = model;
        });

        //Object.keys(db.models).forEach(modelName => {
          //if (db.models[modelName].associate) {
            //db.models[modelName].associate(db.models[modelName]);
          //}
        //});

        Object.keys(db).forEach(modelName => {
          if (db[modelName].associate) {
            db[modelName].associate(db);
          }
        });

        db.sequelize =  sequelize;
        db.Sequelize =  Sequelize;
    }

    return db;
};
