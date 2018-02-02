import * as actionTypes from './action-types'

const initialState = {
  donationDropBoxes: [],
  currentLocation: {
    latitude: 43.7552436,
    longitude: -79.2487037
  },
  infoWindowIsOpen: false
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
    case actionTypes.OPEN_INFO_WINDOW: {
      return {
        ...state,
        infoWindowIsOpen: true
      }
    }
    case actionTypes.CLOSE_INFO_WINDOW: {
      return {
        ...state,
        infoWindowIsOpen: false
      }
    }
    default:
      return state
  }
}

export default reducer
