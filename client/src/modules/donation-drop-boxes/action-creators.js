import { createAction } from 'redux-actions'
import * as actionTypes from './action-types'

export const currentLocationObtained = createAction(
  actionTypes.CURRENT_LOCATION_OBTAINED,
  (currentLocation) => (currentLocation)
)

export const loadAllStarted = createAction(
  actionTypes.LOAD_ALL_STARTED
)

export const loadAllSucceeded = createAction(
  actionTypes.LOAD_ALL_SUCCEEDED,
  (donationDropBoxes) => (donationDropBoxes)
)

export const openInfoWindow = createAction(
  actionTypes.OPEN_INFO_WINDOW,
  (donationDropBox) => (donationDropBox)
)

export const closeInfoWindow = createAction(
  actionTypes.CLOSE_INFO_WINDOW,
  (donationDropBox) => (donationDropBox)
)
