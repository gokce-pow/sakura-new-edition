const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const photoSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  addedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      autopopulate: { maxDepth: 1 },
    },
  ],
})

photoSchema.plugin(autopopulate)
module.exports = mongoose.model('Photo', photoSchema)
