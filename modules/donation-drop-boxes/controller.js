const db = require('../../db/index')

class DonationDropBoxesController {
  static async getDonationDropBoxes (req, res) {
    const { rows } = await db.query('SELECT * FROM donation_drop_boxes')
    return res.send(rows)
  }
}

module.exports = DonationDropBoxesController
