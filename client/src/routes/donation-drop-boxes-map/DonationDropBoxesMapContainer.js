import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DonationDropBoxesMap from './DonationDropBoxesMap'

function mapStateToProps (state) {
  return {
    donationDropBoxes: state.donationDropBoxes.donationDropBoxes
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationDropBoxesMap)
