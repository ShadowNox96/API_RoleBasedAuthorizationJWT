const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Roles = require('./Roles');
const Users = require('./Users');

const Users_has_roles = db.define('users_has_roles', {
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    idRole: {
        type: DataTypes.INTEGER,
        references: {
            model: Roles,
            key: 'id'
        }
    }
});

module.exports = Users_has_roles;