const Model = require('../common/model')

class DonationDropBox extends Model {
  static get tableName () {
    return 'donation_drop_boxes'
  }
}

module.exports = DonationDropBox
