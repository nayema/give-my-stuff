import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    width: '100%'
  }
})

const MapWithAMarker = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }}/>
  </GoogleMap>
))

const GoogleMapScreen = ({ classes }) => (
  <div className={classes.root}>
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }}/>}
      containerElement={<div style={{ height: `400px` }}/>}
      mapElement={<div style={{ height: `100%` }}/>}
    />
  </div>
)

export default withStyles(styles)(GoogleMapScreen)
