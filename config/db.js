const mongoose = require('mongoose');

const init = () => {
    mongoose.set('debug', true); 

    mongoose.connect(process.env.DB_ATLAS_URL).catch(err => {
        console.log(`Error: ${err.stack}`);
    });

    mongoose.connection.on('open', () => {
        console.log('Connected to Database');
    })
};

module.exports = init;