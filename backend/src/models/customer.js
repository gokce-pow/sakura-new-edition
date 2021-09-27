const mongoose = require('mongoose')
require('colors')

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  address: {
    type: String,
    required: true,
  },
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request',
      autopopulate: true
    },
  ],
})

class Customer {
  makeRequest(request) {
    this.requests.push(request)
    console.log(`## ${this.name.magenta.bold} created a new job request
    `)
  }

  addPhoto(photo) {
    this.photos.push(photo)
    console.log(`${this.name} added a new photo to the request`)
  }

  rateHandie(rate, handie) {
    const rateRange = [1, 2, 3, 4, 5]

    if (!rateRange.includes(rate)) return 'Please give a rate between 1-5'

    handie.rates.push(rate)

    return `Your rate(${rate}) has been added successfully.`
  }

  acceptOffer() {}

  declineOffer() {
    //  to do
  }
}
customerSchema.loadClass(Customer)

module.exports = mongoose.model('Customer', customerSchema)
