const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/api/', (req, res) => {
  res.render('index', { title: 'Sakura' })
})

module.exports = router
