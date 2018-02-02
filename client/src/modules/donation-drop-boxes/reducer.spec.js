import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toHaveProperty('donationDropBoxes', [])
    expect(nextState).toHaveProperty('currentLocation', { latitude: 43.7552436, longitude: -79.2487037 })
  })

  it('loads all donation drop boxes', () => {
    const loadAllSucceededAction = actionCreators.loadAllSucceeded(
      [{ id: 1, organizationName: 'Some Organization Name', latitude: 1.000000, longitude: -1.000000 }]
    )

    const nextState = reducer(undefined, loadAllSucceededAction)

    expect(nextState).toHaveProperty(
      'donationDropBoxes',
      [{ id: 1, organizationName: 'Some Organization Name', latitude: 1.000000, longitude: -1.000000 }]
    )
  })

  it('obtains current location', () => {
    const currentLocation = { latitude: 43.7552436, longitude: -79.2487037 }
    const currentLocationObtainedAction = actionCreators.currentLocationObtained(currentLocation)

    const nextState = reducer(undefined, currentLocationObtainedAction)

    expect(nextState).toHaveProperty('currentLocation', { latitude: 43.7552436, longitude: -79.2487037 })
  })
})
