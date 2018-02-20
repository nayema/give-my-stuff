exports.up = knex => knex.schema.createTable('donation_drop_boxes', t => {
  t.increments()
  t.timestamps()

  t.text('organization_name').notNull()
  t.text('address').notNull()
  t.double('latitude').notNull()
  t.double('longitude').notNull()
})

exports.down = knex => knex.schema.dropTable('donation_drop_boxes')
