const express = require('express')

const router = express.Router()
const Handie = require('../models/handie')

router.post('/', async (req, res) => {
  const handieToCreate = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    address: req.body.address,
  }

  const createdHandie = await Handie.create(handieToCreate)
  res.send(createdHandie)
})

router.get('/:handieId', async (req, res) => {
  const handie = await Handie.findById(req.params.handieId)

  if (handie) res.send(handie)
  else res.sendStatus(404)
})

router.post('/signUp', async (req, res) => {
  const newHandie = await Handie.create(req.body)

  res.send(newHandie)
})

router.get('/initialize', async (req, res) => {
  const eddie = await Handie.create({ name: 'eddie', email: 'eddie@eddie.com', jobType: 'gardening' })
  const mildred = await Handie.create({ name: 'mildred', email: 'mildred@mildred.com', jobType: 'painting' })
  const billie = await Handie.create({ name: 'billie', email: 'bille@billie.com', jobType: 'decoration' })
  const lianne = await Handie.create({ name: 'lianne', email: 'lianne@lianne.com', jobType: 'electrician' })
})

module.exports = router
