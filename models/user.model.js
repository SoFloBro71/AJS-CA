const { Schema, model } = require('mongoose'); 
const bcrypt = require('bcryptjs');

const validateEmail = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(email);
};

const userSchema = new Schema({
        full_name: {
            type: String, 
            required: true,
            trim: true
        },
        email: {
            type: String, 
            unique: true,
            lowercase: true,
            required: true,
            trim: true,
            // ///CUSTOM VAIDATOR - MATCH AND VALIDATE DO THE EXACT SAME THING
            // validate: [validateEmail, 'Please use a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email']
        },
        password: {
            type: String, 
            required: true
        },
        // email: [{
        //     type: String,
        //     unique: true,
        //     lowercase: true,
        //     trim: true
        // }]
        
}, {timestamps: true});

userSchema.method.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password, function(result){
        return result
    });
};

module.exports = model('User', userSchema);