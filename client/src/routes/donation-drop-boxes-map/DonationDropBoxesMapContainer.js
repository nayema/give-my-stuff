import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as donationDropBoxes from '../../modules/donation-drop-boxes'
import DonationDropBoxesMap from './DonationDropBoxesMap'

const mapStateToProps = (state) => ({
  currentLocation: state.donationDropBoxes.currentLocation,
  donationDropBoxes: state.donationDropBoxes.donationDropBoxes,
  isLoading: state.donationDropBoxes.isLoading,
})

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    openInfoWindow: (id) => donationDropBoxes.actionCreators.openInfoWindow({ id }),
    closeInfoWindow: (id) => donationDropBoxes.actionCreators.closeInfoWindow({ id })
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationDropBoxesMap)
