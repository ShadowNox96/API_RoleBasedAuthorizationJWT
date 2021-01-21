const express = require('express');
const router = express.Router();
const { isAuthenticated, hasRoles } = require('../auth/index');

// Importacion de los controladores
const authController = require('../controllers/authController');

module.exports = () =>  {
    router.post('/login',  authController.logIn);

    router.post('/register', isAuthenticated, hasRoles([1,3]), authController.register);

    return router;
}