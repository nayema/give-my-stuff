import React from 'react'
import GithubCorner from 'react-github-corner'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import giveMyStuffIconUrl from './give-my-stuff-icon.png'

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
    textAlign: 'center'
  },
  font: {
    fontFamily: 'Indie Flower'
  }
})

const Header = ({ classes }) => (
  <div className={classes.root}>
    <GithubCorner
      href="https://github.com/nayema/give-my-stuff"
      bannerColor="#FD6C6C"
      octoColor="#fff"
      size={80}
      direction="right"
    />
    <img alt="Give my stuff logo" src={giveMyStuffIconUrl}/>
    <Typography type="display3" gutterBottom className={classes.font}>
      Give My Stuff
    </Typography>
  </div>
)

export default withStyles(styles)(Header)
