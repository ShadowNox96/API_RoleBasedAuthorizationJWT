const jwt = require('jsonwebtoken');
const Users = require('../models/Users')
const User_roles = require('../models/Users_has_roles');

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.sendStatus(403);
    }

    jwt.verify(token, 'mysecret-key', (err,decodedtoken) =>{
        const { id } = decodedtoken;
        // find the asigned roles of the user who realize the request
        User_roles.findAll({ where: { idUser: id }}).then( roles => {
            req.user = roles;
            next();
        });

    });
}

const hasRoles = ( idRoles ) => (req, res, next) => {
    const roles = [];
    // Put roles in an array to verify
    req.user.forEach(( id ) => {
        const { idRole } = id;
        roles.push( idRole );
    });

    let counter = 0;
    idRoles.forEach(( idRole ) => {
        if( roles.indexOf( idRole ) > -1){
            counter++;
        }
    });
        if(counter > 0){
            return next();
        }else{
            res.sendStatus(403);
        }

}


module.exports = {
    isAuthenticated,
    hasRoles
}