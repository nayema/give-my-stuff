import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DonationDropBoxesMap from './DonationDropBoxesMap'

storiesOf('Donation Drop Boxes Map', DonationDropBoxesMap)
  .add('with markers', () =>
    <DonationDropBoxesMap
      currentLocation={{ latitude: 43.7552436, longitude: -79.2487037 }}
      donationDropBoxes={[{
        'id': 999,
        'organization_name': 'Some Name',
        'address': 'Some Category',
        'latitude': 43.600648,
        'longitude': -79.50646429999999
      }]}
      openInfoWindow={action('open info window')}
      closeInfoWindow={action('close info window')}
    />
  )
