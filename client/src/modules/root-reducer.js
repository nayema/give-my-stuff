import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as donationDropBoxes from './donation-drop-boxes'

export default combineReducers({
  routing: routerReducer,
  donationDropBoxes: donationDropBoxes.reducer
})
