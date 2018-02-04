import { connect } from 'react-redux'

import DonationDropBoxesMap from './DonationDropBoxesMap'

const mapStateToProps = (state) => ({
  currentLocation: state.donationDropBoxes.currentLocation,
  donationDropBoxes: state.donationDropBoxes.donationDropBoxes
})

export default connect(mapStateToProps)(DonationDropBoxesMap)
