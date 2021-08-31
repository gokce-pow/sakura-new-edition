require('colors')
const express = require('express')

const router = express.Router()
const Customer = require('../models/customer')

const users = [
  { name: 'gokce', age: 18 },
  { name: 'emre', age: 19 },
]

/* GET users listing. */
router.get('/', (req, res) => {
  const result = users
  if (req.query.name) {
    res.send(users.find(user => user.name == req.query.name))
  }
  res.send(result)
})

router.get('/initialize', async (req, res) => {
  console.log('Inside initialize')
  const gokce = await Customer.create({
    name: 'gokce',
    email: 'gokce@gmail.com',
    address: 'Berlin',
    password: '12345678',
  })
  const emre = await Customer.create({
    name: 'emre',
    email: 'emre@gmail.com',
    address: 'Berlin',
    password: '23456789',
  })

  console.log(gokce)
  console.log(emre)
  res.sendStatus(200)
})

router.get('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId)
    console.log('Customer: ', customer)
    if (customer) res.send(customer)
    else res.sendStatus(404)
  } catch (error) {
    res.send(error)
  }
})

router.post('/signup', async (req, res) => {
  console.log('Inside Signup')
  const newCustomer = await Customer.create(req.body)

  res.send(newCustomer)
})

router.post('/login', async (req, res) => {
  const login = await Customer.findOne({ email: req.body.email })
  if (login.password === req.body.password) res.send(`Welcome ${login.name}`)
  console.log('It worked')
})

module.exports = router
