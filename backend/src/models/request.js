const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  jobType: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  acceptedOffer: {},
  declinedOffer: {},
})

module.exports = mongoose.model('Request', requestSchema)
