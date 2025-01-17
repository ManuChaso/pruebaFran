const BASE_URL = 'https://api.thecatapi.com/v1'

/**
 * @param {string} endpoint
 * @param {object} [options={}]
 * @returns {Promise<any>}
 */
const fetchFromApi = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options)
    if (!response.ok) throw new Error(`Failed to fetch: ${endpoint}`)
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const fetchCats = (limit = 10) => {
  return fetchFromApi(`images/search?limit=${limit}`)
}

export const fetchCatDetails = (id) => {
  return fetchFromApi(`images/${id}`)
}

export const searchCats = (breed = '') => {
  return fetchFromApi(`images/search?limit=10&breed_ids=${breed}`)
}

export const fetchBreeds = () => {
  return fetchFromApi('breeds')
}
