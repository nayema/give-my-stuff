import * as actionTypes from './action-types'

export const loadAllSucceeded = (donationDropBoxes) => ({
  type: actionTypes.LOAD_ALL_SUCCEEDED,
  payload: {
    donationDropBoxes
  }
})

export const currentLocationObtained = (currentLocation) => ({
  type: actionTypes.CURRENT_LOCATION_OBTAINED,
  payload: {
    currentLocation
  }
})

export const openInfoWindow = () => ({
  type: actionTypes.OPEN_INFO_WINDOW,
})

export const closeInfoWindow = () => ({
  type: actionTypes.CLOSE_INFO_WINDOW,
})
