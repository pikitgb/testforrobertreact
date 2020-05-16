import axios from 'axios';

export const searchBrewery = (query) => {
  const BASE_URL = "https://api.openbrewerydb.org"
  return axios.get(`${BASE_URL}/breweries/search?query=${query}`)
}