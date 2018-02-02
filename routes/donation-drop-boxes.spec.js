import request from 'supertest'

import app from '../app'
import db from '../db'

describe('donation drop boxes route', () => {
  beforeEach(async () => {
    await db.query('TRUNCATE donation_drop_boxes')
  })

  it('gets all the donation drop boxes', async () => {
    await db.query(
      'INSERT INTO donation_drop_boxes (organization_name, latitude, longitude)' +
      'VALUES (\'Some Organization\', 1.23456789, -1.23456789)'
    )

    const response = await request(app)
      .get('/donation-drop-boxes')

    expect(response.statusCode).toBe(200)
    const donationDropBoxes = response.body
    expect(donationDropBoxes[0]).toHaveProperty('organization_name', 'Some Organization')
    expect(donationDropBoxes[0]).toHaveProperty('latitude', 1.23456789)
    expect(donationDropBoxes[0]).toHaveProperty('longitude', -1.23456789)
  })
})
