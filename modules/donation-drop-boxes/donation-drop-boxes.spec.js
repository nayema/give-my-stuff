import request from 'supertest'

import app from '../../app'
import DonationDropBox from './DonationDropBox'

describe('donation drop boxes', () => {
  beforeEach(async () => {
    await DonationDropBox.query().delete()
  })

  it('gets all the donation drop boxes', async () => {
    await DonationDropBox.query().insert({
      'organization_name': 'Some Organization',
      'address': 'Some Address',
      'latitude': 1.23456789,
      'longitude': -1.23456789
    })

    const response = await request(app)
      .get('/donation-drop-boxes')

    expect(response.statusCode).toBe(200)
    const donationDropBoxes = response.body
    expect(donationDropBoxes[0]).toEqual(expect.objectContaining({
      'organization_name': 'Some Organization',
      'address': 'Some Address',
      'latitude': 1.23456789,
      'longitude': -1.23456789
    }))
  })
})
