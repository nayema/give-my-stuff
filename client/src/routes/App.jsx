import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import Header from './Header'
import DonationDropBoxesMap from './donation-drop-boxes-map/DonationDropBoxesMapContainer'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  container: {
    justifyContent: 'center'
  },
  content: {
    maxWidth: '1000px'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <Header/>
    <Grid container className={classes.container} spacing={24}>
      <Grid item xs className={classes.content}>
        <Paper className={classes.paper}>
          <DonationDropBoxesMap/>
        </Paper>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(App)
