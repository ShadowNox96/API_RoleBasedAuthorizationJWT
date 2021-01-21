const user = require("../models/Users");
const User_roles = require('../models/Users_has_roles');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.logIn = async (req, res) => {
    const { userName, password } = req.body;
    await user.findOne({ where: { userName: userName } })
        .then(( user ) => {
            if (!user) {
                return res.send("Usuario y/o contraseña incorrecta!");
            }

            crypto.pbkdf2(password, user.salt, 30000, 64, "sha1", (err, key) => {
                const encryptedPassword = key.toString("base64");
                if (user.password === encryptedPassword) {
                    const token = singToken(user.id);
                    return res.send({ token });
                }

            return res.send("Usuario y/o contraseña incorrecta!");
            });

        });

    
    
};

exports.register = async (req, res) => {
    // Get id of a user that create a request
    // const { id } = req.user; 

    const { userName, password, idRoles } = req.body;
    //Generate aleatory bytes to generate the salt
    crypto.randomBytes(16, (error, salt) => {
        // Transform salt to string 64 base
        const newSalt = salt.toString("base64");
        // Encrypt password added elements and the encrypting password to generate the key
        crypto.pbkdf2(
            password,
            newSalt,
            30000,
            64,
            "sha1",
            async (err, key) => {
                // Transform the key to a string 64 base
                const passwordEncrypted = key.toString("base64");

                // find de user in te db
                user.findOne({
                    where: { userName: userName },
                }).then((userFind) => {
                    if (userFind) {
                        return res.send("Ususario ya existe");
                    }
                    // User creation
                    user.create({
                        userName: userName,
                        password: passwordEncrypted,
                        salt: newSalt
                    }).then( async ({ id }) => {
                        // Assigned roles to user
                        await idRoles.forEach((value) =>{
                            User_roles.create({
                                idUser: id,
                                idRole: value
                            });
                            
                        });
                        res.send('Usuario creado con exito!')
                        
                    });
                });
            });
    });
};

const singToken = (id) => {
    return jwt.sign({ id }, "mysecret-key", {
        expiresIn: 60 * 60 * 24 * 365,
    });
};
