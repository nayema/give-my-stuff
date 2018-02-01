import * as actionTypes from './action-types'

export const loadAllSucceeded = (donationDropBoxes) => ({
  type: actionTypes.LOAD_ALL_SUCCEEDED,
  payload: {
    donationDropBoxes
  }
})
