import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/donation-drop-boxes-map/DonationDropBoxesMap.stories')
}

configure(loadStories, module)
