const DonationDropBox = require('./DonationDropBox')

class DonationDropBoxesController {
  static async getDonationDropBoxes (req, res) {
    const donationDropBoxes = await DonationDropBox.query()
    return res.send(donationDropBoxes)
  }
}

module.exports = DonationDropBoxesController
