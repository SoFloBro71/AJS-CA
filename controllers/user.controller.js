const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model')

//////////////// REGISTER /////////////////////////////////////////////////

const register = (request, response) => {
    // console.log(request.body)

    const newUser = new User(request.body)
    newUser.password = bcrypt.hashSync(request.body.password, 10)

    newUser.save().then(data => {
        data.password = undefined
    }) 
};

////////////////////////////////////////////////////////////////////////////

///////////////// LOGIN ////////////////////////////////////////////////////
const login = (request, response) => {
    User.findOne({ email: request.body.email})
        .then(user => {
            if(!user){
                return response(401).json({
                    message: 'Authentication failed. Invalid User'
                })
            }

            return response.status(200).json({
                token: jwt.sign({
                    email: user.email,
                    full_name: user.full_name,
                    _id: user._id
                }, process.env.JWT_SECRET)
            });
        })
        .catch(err => {
            return response.status(500).json(err);
        });
};

////////////////////////////////////////////////////////////////////

///////////////////// LOGIN REQUIRED ///////////////////////////////
const loginRequired = (request, response, next) => {
    if(request.user){
        next();
    }
    else {
        return response.status(401).json
    }
};

////////////////////////////////////////////////////////////////////

module.exports = {

    register,
    login,
    loginRequired,
};