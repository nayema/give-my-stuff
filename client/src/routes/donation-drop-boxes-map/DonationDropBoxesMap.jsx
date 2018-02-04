import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import purple from 'material-ui/colors/purple'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
    width: '100%'
  },
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
})

const Loader = ({ classes }) => (
  <div>
    <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7}/>
  </div>
)

const DonationDropBoxMarker = ({ donationDropBoxes, openInfoWindow, closeInfoWindow }) =>
  <div>
    {donationDropBoxes.map(donationDropBox =>
      <Marker
        key={donationDropBox.id}
        position={{ lat: donationDropBox.latitude, lng: donationDropBox.longitude }}
        onClick={() => openInfoWindow(donationDropBox.id)}
      >
        {donationDropBox.isOpen && <InfoWindow onCloseClick={() => closeInfoWindow(donationDropBox.id)}>
          <div>
            <strong>{donationDropBox.organizationName}</strong>
            <br/>
            {donationDropBox.address}
          </div>
        </InfoWindow>}
      </Marker>
    )}
  </div>

const MapWithMarkers = withScriptjs(withGoogleMap(({ currentLocation, donationDropBoxes, openInfoWindow, closeInfoWindow }) =>
  <GoogleMap
    defaultZoom={10}
    center={{ lat: currentLocation.latitude, lng: currentLocation.longitude }}
  >
    <DonationDropBoxMarker
      donationDropBoxes={donationDropBoxes}
      openInfoWindow={openInfoWindow}
      closeInfoWindow={closeInfoWindow}
    />
  </GoogleMap>
))

const DonationDropBoxesMap = ({ classes, isLoading, currentLocation, donationDropBoxes, openInfoWindow, closeInfoWindow }) => (
  <div className={classes.root}>
    {isLoading && <Loader isLoading={isLoading}/>}
    <MapWithMarkers
      currentLocation={currentLocation}
      donationDropBoxes={donationDropBoxes}
      openInfoWindow={openInfoWindow}
      closeInfoWindow={closeInfoWindow}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNBeXv7O6nMJURdEgGyLgdHQcXjv55G-4&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }}/>}
      containerElement={<div style={{ height: `400px` }}/>}
      mapElement={<div style={{ height: `100%` }}/>}
    />
  </div>
)

export default withStyles(styles)(DonationDropBoxesMap)
