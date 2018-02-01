import { camelizeKeys } from 'humps'

export async function loadAll () {
  const response = await fetch('/donation-drop-boxes')
  const jsonResponse = await response.json()
  return camelizeKeys(jsonResponse)
}
