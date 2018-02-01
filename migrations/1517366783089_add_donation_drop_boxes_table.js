exports.up = (pgm) => {
  pgm.createTable(
    'donation_drop_boxes',
    {
      'id': { type: 'serial', primaryKey: true },
      'organization_name': 'text',
      'latitude': { type: 'decimal' },
      'longitude': { type: 'decimal' }
    }
  )
}

exports.down = (pgm) => {
  pgm.dropTable('donation_drop_boxes')
}
