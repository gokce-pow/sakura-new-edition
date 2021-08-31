const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
  request: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Request',
  },
  price: {
    type: Number,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  jobType: [
    {
      type: String,
    },
  ],
  handie: {
    // name??
  },
})

class Offer {
  constructor(request, price, period, description) {
    this.request = request
    this.price = price
    this.period = period
    this.description = description
    this.jobType = []
    this.handie = {}
  }
}

module.exports = mongoose.model('Offer', offerSchema)
