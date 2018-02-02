import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
    width: '100%'
  }
})

const MapWithMarkers = withScriptjs(withGoogleMap(({ donationDropBoxes, currentLocation }) =>
  <GoogleMap
    defaultZoom={10}
    center={{ lat: currentLocation.latitude, lng: currentLocation.longitude }}
  >
    {donationDropBoxes.map(donationDropBox =>
      <Marker
        key={donationDropBox.id}
        position={{ lat: donationDropBox.latitude, lng: donationDropBox.longitude }}
      />
    )}
  </GoogleMap>
))

const DonationDropBoxesMap = ({ classes, donationDropBoxes, currentLocation }) => (
  <div className={classes.root}>
    <MapWithMarkers
      donationDropBoxes={donationDropBoxes}
      currentLocation={currentLocation}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNBeXv7O6nMJURdEgGyLgdHQcXjv55G-4&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }}/>}
      containerElement={<div style={{ height: `400px` }}/>}
      mapElement={<div style={{ height: `100%` }}/>}
    />
  </div>
)

export default withStyles(styles)(DonationDropBoxesMap)
