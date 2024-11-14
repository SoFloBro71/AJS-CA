const express = require('express');
const router = express.Router();
const {loginRequired} = require('../controllers/user.controller')

const {
    readAll, 
    readOne, 
    createData,
    updateData,
    deleteData
} = require('../controllers/platform.controller');

router.get('/', readAll);
router.get('/:id', loginRequired, readOne);
router.post('/create', loginRequired, createData);
router.put('/update/:id', loginRequired, updateData);
router.delete('/delete/:id', loginRequired, deleteData);

module.exports = router;