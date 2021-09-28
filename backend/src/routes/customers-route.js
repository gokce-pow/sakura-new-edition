require('colors')
const express = require('express')
const customer = require('../models/customer')

const router = express.Router()
const Customer = require('../models/customer')
const Handie = require('../models/handie')
const Photo = require('../models/photo')
const Request = require('../models/request')


router.get('/', async (req, res) => {
  const customerToCreate = {
    name: req.body.name,
    age: req.body.age,
  }

  const createdUser = await Customer.create(customerToCreate)
  res.send(createdUser)
})

// router.get('/initialize', async (req, res) => {
//   console.log('Inside initialize')
//   const gokce = await Customer.create({
//     name: 'gokce',
//     email: 'gokce@gmail.com',
//     address: 'Berlin',
//     password: '12345678',
//   })
//   const emre = await Customer.create({
//     name: 'emre',
//     email: 'emre@gmail.com',
//     address: 'Berlin',
//     password: '23456789',
//   })
//   const winnie = await Customer.create({
//     name: 'winnie',
//     email: 'winnie@gmail.com',
//     address: 'Berlin',
//     password: '34567890',
//   })
//   res.sendStatus(200)
// })

router.get('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId)
    if (customer) res.send(customer)
    else res.sendStatus(404)
  } catch (error) {
    res.send(error)
  }
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

/* POST create a customer*/
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

router.get('/initialize', async (req, res) => {
  const gokce = await customer.create({ name: 'gokce', age: 18, email: 'gokce@gmail.com', address: 'Berlin', age: 18 })
  const emre = await customer.create({ name: 'emre', age: 19, email: 'emre@gmail.com', address: 'Berlin', age: 19 })
  const ethan = await customer.create({ name: 'winnie', age: 24, email: 'ethan@gmail.com', address: 'New York', age: 29 })
  const julie = await customer.create({ name: 'julie', age: 28, email: 'julie@gmail.com', address: 'Paris', age: 26 })

  const kitchenPhoto = await photo.create({ filename: 'kitchen.jpeg' })
  const livingRoomPhoto = await photo.create({ filename: 'living room.jpeg' })
  const gardenPhoto = await photo.create({ filename: 'garden.jpeg' })
  const housePhoto = await photo.create({ filename: 'house.jpeg' })

  const decorationRequest = await request.create({ jobType: 'decoration', details: 'interior design' })
  const gardeningRequest = await request.create({ jobType: 'gardening', details: 'I want to plant a blossom tree to my lovely garden' })
  const electricityRequest = await request.create({ jobType: 'electrician', details: 'electricity con }for kitchen' })
  const paintRequest = await request.create({ jobType: 'painting', details: 'I want my living rbe painted' })

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

  if (user) res.send(user)
  else res.sendStatus(404)
})

router.post('/:customerId/adds', async (req, res) => {
  const customer = await customer.findById(req.params.userId)
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
