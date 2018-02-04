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
  })
}, initialState)

export default reducer
