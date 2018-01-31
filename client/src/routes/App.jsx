import React from 'react'
import { withStyles } from 'material-ui/styles'

import Header from './Header'
import DonationDropBoxMap from './donation-drop-box-map/DonationDropBoxMap'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  }
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <Header/>
    <DonationDropBoxMap/>
  </div>
)

export default withStyles(styles)(App)
