const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const handieSchema = new mongoose.Schema({
  name: {
    type: String,
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
      autopopulate: { maxDepth: 1 },
    },
  ],
  job: [
    {
      type: String,
      ref: 'Offer',
      autopopulate: { maxDepth: 1 },
    },
  ],
  updatedOffer: [],

  completedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request',
      autopopulate: { maxDepth: 1 },
    },
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

handieSchema.plugin(autopopulate)
handieSchema.loadClass(Handie)
module.exports = mongoose.model('Handie', handieSchema)
