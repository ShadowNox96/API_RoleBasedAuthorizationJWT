const { Sequelize } = require('sequelize');
require('dotenv').config({path: 'variables.env'});

module.exports = new Sequelize( process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: 'postgres',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

})