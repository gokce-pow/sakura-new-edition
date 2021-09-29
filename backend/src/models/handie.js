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
  job: [
    {
    type: String,
    ref: 'Offer'
    }
  ],
  updatedOffer: [],

  completedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
    }
  ],
  rates: [
    {
      type: Number,
    },
  ],
})

class Handie {
  async makeOffer(offer) {
    this.offers.push(offer)
    await this.save()
  }

  async addPhoto(photo) {
    this.photo.push(photo)
    await this.save()
  }

  async updateOffer(offer) {
    this.updatedOffer.push(offer)
    await this.save()
  }

  async completeJob(job) {
    this.completedJobs.push(job)
    await this.save()
  }
}

module.exports = mongoose.model('Handie', handieSchema)
