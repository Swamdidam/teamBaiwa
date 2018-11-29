/***********************
 * Module dependencies *
 ***********************/
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

/**********************
 *  Imported files    *
 **********************/
const config = require('../../../config');
const publicRoutes = require('./public');


//All public routes
// const userControl = require('../user');


module.exports = publicRoutes;
router.use(publicRoutes);


/******************
 * Export router  *
 ******************/
module.exports = router;
