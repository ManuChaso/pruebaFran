import { useState, useEffect } from 'react'
import { fetchCatDetails } from '../../../services/api'
import Loader from '../Loader/Loader'
import './Favorites.css'

function Favorites() {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadFavorites()
  }, [])

  const loadFavorites = async () => {
    try {
      setLoading(true)
      const favoritesIds =
        JSON.parse(localStorage.getItem('catFavorites')) || []
      const favoritesDetails = await Promise.all(
        favoritesIds.map((id) => fetchCatDetails(id))
      )
      setFavorites(favoritesDetails)
    } catch (error) {
      setError('Failed to load favorites')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const removeFavorite = (id) => {
    const favoritesIds = JSON.parse(localStorage.getItem('catFavorites')) || []
    const updatedFavorites = favoritesIds.filter((favId) => favId !== id)
    localStorage.setItem('catFavorites', JSON.stringify(updatedFavorites))
    setFavorites(favorites.filter((fav) => fav.id !== id))
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div className='favorites-error'>{error}</div>
  }

  return (
    <div className='favorites-container'>
      <h2>My Favorite Cats</h2>
      {favorites.length === 0 ? (
        <div className='no-favorites'>
          <p>No tienes ningún gato como favorito!</p>
        </div>
      ) : (
        <div className='favorites-grid'>
          {favorites.map((cat) => (
            <div key={cat.id} className='favorite-card'>
              <img src={cat.url} alt='Favorite cat' loading='lazy' />
              <button
                onClick={() => removeFavorite(cat.id)}
                className='remove-favorite'
              >
                Remove from favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
