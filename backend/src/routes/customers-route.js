require('colors')
const express = require('express')

const router = express.Router()
const Customer = require('../models/customer')
const Handie = require('../models/handie')
const Photo = require('../models/photo')
const Request = require('../models/request')

router.post('/', async (req, res) => {
  const customerToCreate = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    address: req.body.address
  }

  const createdCustomer = await Customer.create(customerToCreate)
  res.send(createdCustomer)
})

router.get('/:customerId', async (req, res) => {
  const customer = await Customer.findById(req.params.customerId)

  if (customer) res.send(customer)
  else res.sendStatus(404)
})

router.post('/signup', async (req, res) => {
  const newCustomer = await Customer.create(req.body)

  res.send(newCustomer)
})

router.post('/login', async (req, res) => {
  const login = await Customer.findOne({ email: req.body.email })
  if (login.password === req.body.password) res.send(`Welcome ${login.name}`)
  console.log('It worked')
})

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }

  res.send(await Customer.find(query))
})

router.get('/test/initialize', async (req, res) => {
  const gokce = await Customer.create({ name: 'gokce', age: 18, email: 'gokce@gmail.com', address: 'Berlin' })
  const emre = await Customer.create({ name: 'emre', age: 19, email: 'emre@gmail.com', address: 'Berlin' })
  const ethan = await Customer.create({ name: 'ethan', age: 24, email: 'ethan@gmail.com', address: 'New York' })
  const julie = await Customer.create({ name: 'julie', age: 28, email: 'julie@gmail.com', address: 'Paris' })

  const kitchenPhoto = await Photo.create({ filename: 'kitchen.jpeg' })
  const livingRoomPhoto = await Photo.create({ filename: 'living room.jpeg' })
  const gardenPhoto = await Photo.create({ filename: 'garden.jpeg' })
  const housePhoto = await Photo.create({ filename: 'house.jpeg' })

  const decorationRequest = await Request.create({ jobType: 'decoration', details: 'interior design' })
  const gardeningRequest = await Request.create({ jobType: 'gardening', details: 'I want to plant a blossom tree to my lovely garden' })
  const electricityRequest = await Request.create({ jobType: 'electrician', details: 'electricity con }for kitchen' })
  const paintRequest = await Request.create({ jobType: 'painting', details: 'I want my living rbe painted' })

  await gokce.addPhoto(housePhoto)
  await emre.addPhoto(gardenPhoto)
  await ethan.addPhoto(kitchenPhoto)
  await julie.addPhoto(livingRoomPhoto)

  await gokce.makeRequest(housePhoto)
  await emre.makeRequest(gardenPhoto)
  await ethan.makeRequest(kitchenPhoto)
  await julie.makeRequest(livingRoomPhoto)
})

router.get('/:customerId', async (req, res) => {
  const customer = await Customer.findById(req.params.customerId)

  if (customer) res.send(customer)
  else res.sendStatus(404)
})

router.post('/:customerId/adds', async (req, res) => {
  const customer = await customer.findById(req.params.customerId)
  const photo = await Photo.findById(req.body.photoId)

  await customer.addPhoto(photo)
  res.sendStatus(200)
})

// router.post('/:userId/likes', async (req, res) => {
//   const user = await User.findById(req.params.userId)
//   const photo = await Photo.findById(req.body.photoId)

//   await user.likePhoto(photo)
//   res.sendStatus(200)
// })



// router.get('/:userId/json', async (req, res) => {
//   const user = await User.findById(req.params.userId)
//   res.send(user)
// })
module.exports = router
