const csv = require('csv-parser')
const fs = require('fs')
const axios = require('axios')

const DonationDropBox = require('../modules/donation-drop-boxes/DonationDropBox')

function sleep (millis) {
  const waitTill = new Date(new Date().getTime() + millis)
  while (waitTill > new Date()) {
  }
}

DonationDropBox.query().delete()
console.log('All previous donation drop boxes deleted successfully.')

const rows = []
fs.createReadStream(process.argv[2])
  .pipe(csv())
  .on('data', (data) => rows.push(data))
  .on('end', async () => {
    for (const row of rows) {
      const organizationName = row['Client Name']
      const postalCode = `${row['Licence Address Line 3']}`

      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${process.env.GOOGLE_MAPS_API_KEY}`

      try {
        const response = await axios.get(geocodeUrl)
        const address = response.data.results[0]['formatted_address']
        const { lat, lng } = response.data.results[0]['geometry']['location']
        console.log('Geocoded and imported: %s, %s, %s, %s', organizationName, address, lat, lng)

        await DonationDropBox.query().insert({
          'organization_name': organizationName,
          'address': address,
          'latitude': lat,
          'longitude': lng
        })
      } catch (e) {
        console.log('Error: ' + e.message)
      }
      sleep(100)
    }

    console.log('Finished geocoding and importing.')
    process.exit()
  })
