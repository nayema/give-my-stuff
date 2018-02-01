import request from 'supertest'

import app from '../app'

describe('donation drop boxes route', () => {
  it('gets all the donation drop boxes', async () => {

    const response = await request(app)
      .get('/donation-drop-boxes')

    expect(response.statusCode).toBe(200)
  })
})
