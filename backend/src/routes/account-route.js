const express = require('express')
const passport = require('passport')

const Customer = require('../models/customer')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.customer)
})

router.post('/', async (req, res, next) => {
  const { name, age, email, address, password } = req.body

  try {
    const user = await Customer.register({ name, age, email, address }, password)
    res.send(user)
  } catch (e) {
    next(e)
  }
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.customer)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router