const express = require('express');
const router = express.Router();

let Complaints = require('./models/Complaints')

router.get('*', (req, res) => {
  res.json({status: 200, message:'We are good to go'});
});

router.post('*', (req, res) => {
    console.warn(req.body)
    let { sessionId, serviceCode, phoneNumber, text } = req.body

    if (text === ''){
        res.send(`CON Please select a language
            1. English
            2. Hausa
        `)
    } else if (text === '1'){
        res.send(`CON State your complaint
            1. Unclean facilities
            2. Insufficient medication
            3. Bad customer service
            4. Excessive wait time to see a doctor
            5. Others
        `)
    } else if(text === '2'){
        res.send(`END This function is still in development. Please check back later`)
    } else if (text === '1*1'){
        new Complaints({
            sessionId,
            serviceCode,
            phoneNumber,
            complaint: 'Unclean Facilities',
            date: new Date()
        }).save()
        .then(() => res.send(`END Thank you for your feedback. It has been noted and action will be taken shortly`))
        .catch(() => res.send(`An error occurred. Please try again`))
    } else if (text === '1*2'){
        new Complaints({
            sessionId,
            serviceCode,
            phoneNumber,
            complaint: 'Insufficient Medication',
            date: new Date()
        }).save()
            .then(() => res.send(`END Thank you for your feedback. It has been noted and action will be taken shortly`))
            .catch(() => res.send(`An error occurred. Please try again`))
    } else if (text === '1*3'){
        new Complaints({
            sessionId,
            serviceCode,
            phoneNumber,
            complaint: 'Bad Customer Service',
            date: new Date()
        }).save()
            .then(() => res.send(`END Thank you for your feedback. It has been noted and action will be taken shortly`))
            .catch(() => res.send(`An error occurred. Please try again`))
    } else if (text === '1*4'){
        new Complaints({
            sessionId,
            serviceCode,
            phoneNumber,
            complaint: 'Excessive wait time to see a doctor',
            date: new Date()
        }).save()
            .then(() => res.send(`END Thank you for your feedback. It has been noted and action will be taken shortly`))
            .catch(() => res.send(`An error occurred. Please try again`))
    } else if (text === '1*5'){
        res.send(`CON Enter your complaint`)
    } else {
        new Complaints({
            sessionId,
            serviceCode,
            phoneNumber,
            complaint: text.split('*')[text.split('*').length - 1],
            date: new Date()
        }).save()
            .then(() => {
                console.log('Saved')
                res.send(`END Thank you for your feedback. It has been noted and action will be taken shortly`)
            })
            .catch(() => res.send(`An error occurred. Please try again`))
    }
})

module.exports = router;
