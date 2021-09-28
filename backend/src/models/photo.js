const mongoose = require('mongoose')


const photoSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  addedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    }
  ]
})
module.exports = mongoose.model('Photo', photoSchema)