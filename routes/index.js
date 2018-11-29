const os = require('os');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const user = require('./user');
const   UssdMenu          = require('ussd-menu-builder');
let menu                  = new UssdMenu();
 


// Define menu states
menu.startState({
    run: () => {
        // use menu.con() to send response without terminating session      
        menu.con('Welcome. Select Language:' +
            '\n1. English' +
            '\n2. Hausa');
    },
    // next object links to next state based on user input
    next: {
        '1': 'English',
        '2': 'Hausa'
    }
});
 
menu.state('English', {
    run: () => {
        // use menu.con() to send response without terminating session      
        menu.con('Please state your complain :' +
            '\n1. Unclean facilities' +
            '\n2. Insufficient medication'  +
            '\n3. Bad customer relations' +
            '\n4. Excessive time wait to see a doctor' +
            '\n5. Others');
        
    },
    // next object links to next state based on user input
    next: {
        '1': 'Unclean facilities',
        '2': 'Insufficient medication',
        '3': 'Bad customer relations',
        '4': 'Excessive time wait to see a doctor',
        '5': 'Others',

    }
});


menu.state('Others', {
    run: () => {
        menu.con('Please we will get back to you shortly:');
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'Others'
    }
});
 
// nesting states
menu.state('Others', {
    run: () => {
            menu.end('Thank you for reaching out to.');
    }
});
 
// Registering USSD handler with Express
 
router.post('/ussd', function(req, res){
    menu.run(req.body, ussdResult => {
        res.send(ussdResult);
    });
});
 

/* GET home page. */

router.get('/', (req, res) => {
  res.json({status: 200, message:'We are good to go'});
});

// //All routes to be used
// router.use('/', user);

module.exports = router;
