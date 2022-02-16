const Sequelize = require("sequelize");
const bd_mysql = require("../config/database");

const database = new Sequelize(bd_mysql);

module.exports = database;
