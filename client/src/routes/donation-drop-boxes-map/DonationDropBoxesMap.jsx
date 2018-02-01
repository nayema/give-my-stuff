import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
    width: '100%'
  }
})

const MapWithMarkers = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 43.6445375, lng: -79.391803 }}
  >
    <Marker position={{ lat: 43.6445375, lng: -79.391803 }}/>
  </GoogleMap>
))

const DonationDropBoxesMap = ({ classes }) => (
  <div className={classes.root}>
    <MapWithMarkers
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }}/>}
      containerElement={<div style={{ height: `400px` }}/>}
      mapElement={<div style={{ height: `100%` }}/>}
    />
  </div>
)

export default withStyles(styles)(DonationDropBoxesMap)
