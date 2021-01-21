const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const Roles = require('../models/Roles')
const Users = db.define('user',{

    userName: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    salt: {
        type: DataTypes.STRING
    }
});

module.exports = Users;


