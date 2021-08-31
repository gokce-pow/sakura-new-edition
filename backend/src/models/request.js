const mongoose = require('mongoose')
const requestSchema = new mongoose.Schema({
  jobType: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  photo: {
    type: photo,
  },
  acceptedOffer: {},
  declinedOffer: [{}],
})
class Request {}

module.exports = Request
