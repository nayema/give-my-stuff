import { connect } from 'react-redux'

import DonationDropBoxesMap from './DonationDropBoxesMap'

const mapStateToProps = (state) => ({
  donationDropBoxes: state.donationDropBoxes.donationDropBoxes,
  currentLocation: state.donationDropBoxes.currentLocation
})

export default connect(mapStateToProps)(DonationDropBoxesMap)
