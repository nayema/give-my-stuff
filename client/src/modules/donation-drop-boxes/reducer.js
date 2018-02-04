import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  currentLocation: {
    latitude: 43.7552436,
    longitude: -79.2487037
  },
  donationDropBoxes: [],
  isLoading: false
}

const reducer = handleActions({
  [actionTypes.CURRENT_LOCATION_OBTAINED]: (state, action) => ({
    ...state,
    currentLocation: action.payload
  }),
  [actionTypes.LOAD_ALL_STARTED]: (state) => ({
    ...state,
    isLoading: true
  }),
  [actionTypes.LOAD_ALL_SUCCEEDED]: (state, action) => ({
    ...state,
    donationDropBoxes: action.payload,
    isLoading: false
  }),
  [actionTypes.OPEN_INFO_WINDOW]: (state, action) => ({
    ...state,
    donationDropBoxes: state.donationDropBoxes.map(donationDropBox =>
      donationDropBox.id === action.payload.id ? { ...donationDropBox, isOpen: true } : donationDropBox)
  }),
  [actionTypes.CLOSE_INFO_WINDOW]: (state, action) => ({
    ...state,
    donationDropBoxes: state.donationDropBoxes.map(donationDropBox =>
      donationDropBox.id === action.payload.id ? { ...donationDropBox, isOpen: false } : donationDropBox)
  })
}, initialState)

export default reducer
