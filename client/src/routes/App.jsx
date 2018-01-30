import React from 'react'
import { withStyles } from 'material-ui/styles'

import Header from './Header'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  }
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <Header/>
  </div>
)

export default withStyles(styles)(App)
