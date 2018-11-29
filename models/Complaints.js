const mongoose = require('mongoose')

const complaint = new mongoose.Schema({
	sessionId: String,
	serviceCode: String,
	phoneNumber: String,
	complaint: String,
	date: Date
})

module.exports = mongoose.model('Complaints', complaint)
