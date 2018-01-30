import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import * as clothesTemperatureMappings from './clothes-temperature-mappings'

export default combineReducers({
  routing: routerReducer
  // clothesTemperatureMappings: clothesTemperatureMappings.reducer
})
