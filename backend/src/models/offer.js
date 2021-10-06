const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const offerSchema = new mongoose.Schema({
  requests: [
    {
      type: String,
      required: true,
      ref: 'Request',
      autopopulate: { maxDepth: 1 },
    },
  ],
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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request',
      autopopulate: { maxDepth: 1 },
    },
  ],
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
offerSchema.plugin(autopopulate)
offerSchema.loadClass(Offer)
module.exports = mongoose.model('Offer', offerSchema)
