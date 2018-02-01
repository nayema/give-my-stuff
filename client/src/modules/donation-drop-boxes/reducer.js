import * as actionTypes from './action-types'

const initialState = {
  donationDropBoxes: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ALL_SUCCEEDED: {
      return {
        ...state,
        donationDropBoxes: action.payload.donationDropBoxes
      }
    }
    default:
      return state
  }
}

export default reducer
