import { put, call } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as repository from './repository'

export function * obtainCurrentLocation () {
  const currentLocation = yield call(repository.getCurrentLocation)
  yield put(actionCreators.currentLocationObtained(currentLocation))
}

export function * loadAll () {
  const donationDropBoxes = yield call(repository.loadAll)
  yield put(actionCreators.loadAllSucceeded(donationDropBoxes))
}
