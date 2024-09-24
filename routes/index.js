const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Cours d\'introduction au Cloud',
    content: 'Ceci est une page quasi-vide',
  })
})

module.exports = router
