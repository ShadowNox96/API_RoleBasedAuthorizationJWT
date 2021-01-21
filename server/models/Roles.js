const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Roles = db.define('roles',{
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    }
});

module.exports = Roles;