const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
  filename: String,
})

module.exports = mongoose.model('Photo', photoSchema)
