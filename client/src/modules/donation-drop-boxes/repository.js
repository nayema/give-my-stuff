import { camelizeKeys } from 'humps'

function getPosition (options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

export async function getCurrentLocation () {
  if (navigator.geolocation) {
    const position = await getPosition()
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
  }
}

export async function loadAll () {
  const response = await fetch('/donation-drop-boxes')
  const jsonResponse = await response.json()
  return camelizeKeys(jsonResponse)
}


