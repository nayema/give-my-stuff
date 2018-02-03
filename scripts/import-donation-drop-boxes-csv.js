const csv = require('csv-parser')
const fs = require('fs')
const axios = require('axios')

const db = require('../db')

function sleep (millis) {
  const waitTill = new Date(new Date().getTime() + millis)
  while (waitTill > new Date()) {
  }
}

db.query('TRUNCATE donation_drop_boxes')
console.log('donation_drop_boxes table truncated successfully')

const rows = []
fs.createReadStream(process.argv[2])
  .pipe(csv())
  .on('data', (data) => rows.push(data))
  .on('end', async () => {
    for (let row of rows) {
      const organizationName = row['Operating Name']
      const address = `${row['Permit Address Street No.']} ${row['Permit Address Street Name']}, ${row['Permit Address Postal Code']}`

      const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBTVrTJIBbEaI-H5G9Ar6X7I0O4qmC28AA`

      try {
        const response = await axios.get(geocodeURL)
        const { lat, lng } = response.data.results[0]['geometry']['location']
        console.log('Geocoded and imported: %s, %s, %s, %s', organizationName, address, lat, lng)

        db.query(
          'INSERT INTO donation_drop_boxes (organization_name, latitude, longitude) VALUES ($1, $2, $3)',
          [organizationName, lat, lng]
        )
      } catch (e) {
        console.log('Error: ' + e.message)
      }
      sleep(100)
    }
  })
