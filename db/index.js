const { Pool } = require('pg')
const config = require('config')

const pool = new Pool({
  ...config.get('db'),
  database: config.get('db.name')
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
