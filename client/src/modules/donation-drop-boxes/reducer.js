import * as actionTypes from './action-types'

const initialState = {
  donationDropBoxes: [],
  currentLocation: {
    latitude: 43.7552436,
    longitude: -79.2487037
  }
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ALL_SUCCEEDED: {
      return {
        ...state,
        donationDropBoxes: action.payload.donationDropBoxes
      }
    }
    case actionTypes.CURRENT_LOCATION_OBTAINED: {
      return {
        ...state,
        currentLocation: action.payload.currentLocation
      }
    }
    default:
      return state
  }
}

export default reducer
