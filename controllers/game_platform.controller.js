const Game_Platform = require('../models/game_platform.model')


// ALL
    const readAll = (request, response) => {

        Game_Platform.find()
            .then(data => {
                console.log(data);

                if(data.length > 0){
                    return response.status(200).json(data);
                }

                else{
                    return response.status(404).json('None Found');
                }

            })

            .catch(err => {
                console.log(err);
                return response.status(500).json(err);
            });

};



    // SINGLE
    const readOne = (request, response) => {
        console.log('fkdsjkhfkdsjhf')
    let id = request.params.id;

    Game_Platform.findById(id)
        .then(data => {
            if(!data){
                return response.status(200).json({
                    message: `Game_Platform with id: ${id} retrieved`
                })
            }

            return response.status(200).json({
                message: `Game_Platform with id: ${id} retrieved`,
                data
            })
        })

        .catch(err => {
            console.log(err);
            if(err.name === 'CastError'){
                return response.status(404).json(`Game_Platform with id: ${id} not found`);
            }
            return response.status(500).json(err);
        });


};



    // CREATE
    const createData = (request, response) => {

    console.log(request.body);
    let body = request.body;

    Game_Platform.create(body)
        .then(data => {
            console.log(`New Game_Platform created`, data);

            return response.status(201).json({
                message: 'Game_Platform created',
                data
            });
        })
        .catch(err => {

            console.log(err);

            if(err.name === 'CastError'){
                return response.status(404).json({
                    message: `Game_Platform with id: ${id} not found`
                });
            }

            if(err.name === 'ValidationError'){
                return response.status(422).json(err);
            }

            return response.status(500).json(err);

        })

    // if(data.password.length < 6){
    //     return response.status(422).json({
    //         "message": "Festival password must be over 6 characters"
    //     });
    // };

    // data.password = undefined;

    // response.status(201).json({
    //     "message" : "All good",
    //     "data": data
    // });
};



    // UPDATE
    const updateData = (request, response) => {

    let id = request.params.id;
    let body = request.body;

    Game_Platform.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    })
        .then(data => {
            return response.status(201).json(data);
        })
        .catch(err => {


            if(err.name === 'CastError'){
                return response.status(404).json({
                    message: `Game_Platform with id: ${id} not found`
                });
            };

            if(err.name === 'ValidationError'){
                return response.status(422).json(err);
            };

            return response.status(500).json(err);
        });

    // CONNECT TO DATABASE AND CHECK IF USER EXISTS
    // CHECK IF DATA IS VALID, IF yes UPDATE USER WITH :ID

    // data.id = id;

    // response.status(200).json({
    //     "message": `You updated festival with id: ${id}`,
    //     "data": data
    // });
};



    // DELETE
    const deleteData = (request, response) => {

    let id = request.params.id;


    // CONNECT TO DATABASE AND CHECK IF USER EXISTS
    // CHECK IF DATA IS VALID, IF yes UPDATE USER WITH :ID

    response.status(200).json({
        "message": `You deleted Game_Platform with id: ${id}`,
    });
};

module.exports = {readAll, readOne, createData, updateData, deleteData};