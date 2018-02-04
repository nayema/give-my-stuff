import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toHaveProperty('donationDropBoxes', [])
    expect(nextState).toHaveProperty('currentLocation', { latitude: 43.7552436, longitude: -79.2487037 })
    expect(nextState).toHaveProperty('isLoading', false)
  })

  it('obtains current location', () => {
    const currentLocation = { latitude: 43.7552436, longitude: -79.2487037 }
    const currentLocationObtainedAction = actionCreators.currentLocationObtained(currentLocation)

    const nextState = reducer(undefined, currentLocationObtainedAction)

    expect(nextState).toHaveProperty('currentLocation', { latitude: 43.7552436, longitude: -79.2487037 })
  })

  describe('when loading donation drop boxes', () => {
    it('starts loading donation drop boxes', () => {
      const loadAllStartedAction = actionCreators.loadAllStarted()

      const nextState = reducer(undefined, loadAllStartedAction)

      expect(nextState).toHaveProperty('isLoading', true)
    })

    it('succeeds loading donation drop boxes', () => {
      const previousState = { donationDropBoxes: [], isLoading: true }
      const donationDropBoxes = [{
        id: 1,
        organizationName: 'Some Organization Name',
        latitude: 1.000000,
        longitude: -1.000000
      }]
      const loadAllSucceededAction = actionCreators.loadAllSucceeded(donationDropBoxes)

      const nextState = reducer(previousState, loadAllSucceededAction)

      expect(nextState).toHaveProperty(
        'donationDropBoxes',
        [{ id: 1, organizationName: 'Some Organization Name', latitude: 1.000000, longitude: -1.000000 }]
      )
      expect(nextState).toHaveProperty('isLoading', false)
    })
  })

  describe('when toggling information window', () => {
    it('opens information window', () => {
      const previousState = { donationDropBoxes: [{ id: 1 }] }
      const donationDropBox = { id: 1 }
      const openInformationWindowAction = actionCreators.openInfoWindow(donationDropBox)

      const nextState = reducer(previousState, openInformationWindowAction)

      expect(nextState).toHaveProperty('donationDropBoxes', [{ id: 1, isOpen: true }])
    })

    it('closes information window', () => {
      const previousState = { donationDropBoxes: [{ id: 1, isOpen: true }] }
      const donationDropBox = { id: 1 }
      const openInformationWindowAction = actionCreators.closeInfoWindow(donationDropBox)

      const nextState = reducer(previousState, openInformationWindowAction)

      expect(nextState).toHaveProperty('donationDropBoxes', [{ id: 1, isOpen: false }])
    })
  })
})
