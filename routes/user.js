const express = require('express');
const { createUser, getUser } = require('../controllers/userController');
const userRoutes = express.Router();

userRoutes.post('/', createUser);

userRoutes.get('/:id', getUser);

module.exports = userRoutes