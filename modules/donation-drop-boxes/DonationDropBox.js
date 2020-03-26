const Model = require('../common/model')

class DonationDropBox extends Model {
  static get tableName() {
    return 'donation_drop_boxes'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        organization_name: { type: 'string' },
        address: { type: 'string' },
        latitude: { type: 'number' },
        longitude: { type: 'number' }
      }
    };
  }
}

module.exports = DonationDropBox
