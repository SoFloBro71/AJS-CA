const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;

require('dotenv').config();
require('./config/db.js')();

app.use(express.json());

app.set('view engine', 'html');
app.use(express.static(__dirname + '/views/'))

app.use((request, response, next) => {
    console.log('Time:', Date.now());
    next();
});

////// AUTHORIZATION ///////////////////////

app.use((request, response, next) => {
    let authHeader = request.headers?.authorization?.split(' ');

    if (request.headers?.authorization && authHeader[0] === 'Bearer'){
        jwt.verify(authHeader[1], process.env.JWT_SECRET, (err, decoded) => {
            if(err) request.user = undefined;
            request.user = decoded;
            next();
        });
    }
    else {
        request.user = undefined;
        next();
    };

    // console.log(authHeader);

    // return res.status(200);
});

/////////////////////////////////////////////

// ROUTES 

app.use('/api/users', require('./routes/users'));
app.use('/api/games', require('./routes/games'));
app.use('/api/platforms', require('./routes/platform'));
app.use('/api/genres', require('./routes/genres'));
app.use('/api/creators', require('./routes/creators'));
app.use('/api/game_platforms', require('./routes/game_platform'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
