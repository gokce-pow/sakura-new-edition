const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const autopopulate = require('mongoose-autopopulate')

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  // email: {
  //   type: String,
  //   unique: true,
  //   required: true,
  // },
  age: {
    type: Number,
  },
  // password: {
  //   type: String,
  //   required: true,
  //   minLength: 8,
  // },
  address: {
    type: String,
    required: true,
  },
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request',
      autopopulate: { maxDepth: 1 },
    },
  ],
  acceptedOffer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Offer',
      autopopulate: { maxDepth: 1 },
    },
  ],
  declinedOffer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Offer',
      autopopulate: { maxDepth: 1 },
    },
  ],
})

class Customer {
  async makeRequest(request) {
    this.requests.push(request)
    await this.save()
  }

  async addPhoto(photos) {
    this.requests.push(photos)
    await this.save()
  }

  async rateHandie(rate, handie) {
    const rateRange = [1, 2, 3, 4, 5]
    if (!rateRange.includes(rate)) return 'Please give a rate between 1-5'
    handie.rates.push(rate)
    await this.save()
    return `Your rate(${rate}) has been added successfully.`
  }

  async acceptOffer(offer) {
    this.acceptedOffer.push(offer)
    await this.save()
  }

  async declineOffer(offer) {
    this.declinedOffer.push(offer)
    await this.save()
  }
}
customerSchema.loadClass(Customer)
customerSchema.plugin(autopopulate)
customerSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('Customer', customerSchema)
