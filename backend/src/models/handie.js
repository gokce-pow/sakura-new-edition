const mongoose = require('mongoose')
require('colors')

const handieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  offers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Offer',
    },
  ],

  /*  completedJobs:
    {

    }
*/
  rates: [
    {
      type: Number,
    },
  ],
})

class Handie {
  makeOffer(offer) {
    this.offers.push(offer)
    console.log(`# ${this.name.brightBlue.bold} made an offer to request with ${
      offer.request.toString().brightBlue.italic
    }
    `)
  }

  addPhoto(photo) {
    this.completedJobs.push(photo)
  }

  updateOffer() {
    //  to do
  }

  get jobs() {
    return `
            # ${this.name.brightBlue.bold} is waiting for approval for the ${this.jobType.brightBlue.italic} request.
        `
  }

  set job(newValue) {
    throw new Error(`You haven't make an offer to this request yet.`)
  }
}

module.exports = mongoose.model('Handie', handieSchema)
