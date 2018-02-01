const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/donation-drop-boxes', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM donation_drop_boxes')
  res.send(rows)
})

module.exports = router
