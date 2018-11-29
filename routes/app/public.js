const publicRoutes = require('express').Router();
const userControl = require('../user');

publicRoutes.post('/register', userControl.register);
publicRoutes.post('/login', userControl.login);
publicRoutes.post('/forgot', userControl.forgot);
publicRoutes.post('/reset_pword', userControl.reset_pword);

module.exports = publicRoutes;