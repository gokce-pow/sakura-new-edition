const mongoose = require('mongoose')


const photoSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  addedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
    }
  ]
})
module.exports = mongoose.model('Photo', photoSchema)