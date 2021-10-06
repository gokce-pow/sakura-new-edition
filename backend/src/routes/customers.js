const express = require('express')

const router = express.Router()
const Customer = require('../models/customer')
const Handie = require('../models/handie')
const Offer = require('../models/offer')
const Photo = require('../models/photo')
const Request = require('../models/request')

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }
  const result = await Customer.find(query)
  res.send(result)
})

router.post('/', async (req, res) => {
  const customerToCreate = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    address: req.body.address,
  }

  const createdCustomer = await Customer.create(customerToCreate)
  res.send(createdCustomer)
})
// async function createPhoto(filename) {
//   const photo = await Photo.create({ filename })

//   const picsumUrl = `https://picsum.photos/seed/${photo._id}/300/300`
//   const pictureRequest = await axios.get(picsumUrl)
//   photo.filename = pictureRequest.request.path

//   const imagePath = await downloadImage(picsumUrl, filename)
//   const description = await describeImage(imagePath)
//   photo.description = description.BestOutcome.Description

//   return photo.save()
// }

router.get('/initialize', async (req, res) => {
  const gokce = new Customer({ name: 'gokce', age: 18, address: 'Berlin' })
  await gokce.setPassword('test')
  await gokce.save()

  const emre = new Customer({ name: 'emre', age: 19, address: 'Berlin' })
  await emre.setPassword('test')
  await emre.save()

  const ethan = new Customer({ name: 'ethan', age: 24, address: 'New York' })
  await ethan.setPassword('test')
  await ethan.save()

  const julie = new Customer({ name: 'julie', age: 28, address: 'Paris' })
  await julie.setPassword('test')
  await julie.save()

  const kitchenPhoto = await Photo.create({ filename: 'kitchen.jpeg' })
  const livingRoomPhoto = await Photo.create({ filename: 'living room.jpeg' })
  const gardenPhoto = await Photo.create({ filename: 'garden.jpeg' })
  const housePhoto = await Photo.create({ filename: 'house.jpeg' })

  const decorationRequest = await Request.create({ jobType: 'decoration', details: 'interior design' })
  const gardeningRequest = await Request.create({
    jobType: 'gardening',
    details: 'I want to plant a cherry blossom tree to my lovely garden',
  })
  const electricityRequest = await Request.create({ jobType: 'electrician', details: 'electricity con }for kitchen' })
  const paintRequest = await Request.create({ jobType: 'painting', details: 'I want my living room to be painted' })

  await gokce.addPhoto(housePhoto)
  await emre.addPhoto(gardenPhoto)
  await ethan.addPhoto(kitchenPhoto)
  await julie.addPhoto(livingRoomPhoto)

  await gokce.makeRequest(decorationRequest)
  await emre.makeRequest(gardeningRequest)
  await ethan.makeRequest(electricityRequest)
  await julie.makeRequest(paintRequest)

  res.sendStatus(200)
})
router.post('/:customerId/adds', async (req, res) => {
  const customer = await Customer.findById(req.params.customerId)
  const photo = await Photo.findById(req.body.photoId)

  await customer.addPhoto(photo)
  res.sendStatus(200)
})
router.get('/:customerId', async (req, res) => {
  const customer = await Customer.findById(req.params.customerId)

  if (customer) res.send(customer)
  else res.sendStatus(404)
})

router.get('/:customerId/json', async (req, res) => {
  const customer = await Customer.findById(req.params.customerId)
  res.send(customer)
})

module.exports = router
