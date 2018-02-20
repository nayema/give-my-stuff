const express = require('express')
const router = express.Router()

const DonationDropBoxesController = require('./DonationDropBoxesController')

router.get('/donation-drop-boxes', DonationDropBoxesController.getDonationDropBoxes)

module.exports = router
