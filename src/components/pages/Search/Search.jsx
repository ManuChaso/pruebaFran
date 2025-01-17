import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { searchCats, fetchBreeds } from '../../../services/api'
import './Search.css'
import { Heart } from 'lucide-react'
import { useFavorites } from '../../../components/hooks/useFavorites'
import Loader from '../Loader/Loader'

function Search() {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  const handleFavoriteClick = (catId) => {
    if (isFavorite(catId)) {
      removeFavorite(catId)
    } else {
      addFavorite(catId)
    }
  }

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        setLoading(true)
        const breedsData = await fetchBreeds()
        setBreeds(breedsData)
      } catch (error) {
        setError('Failed to load breeds')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    loadBreeds()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const results = await searchCats(selectedBreed)
      setCats(results)
    } catch (error) {
      setError('Failed to search cats')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className='search-container'>
      <h2>Search Cats</h2>
      <form onSubmit={handleSearch} className='search-form'>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className='breed-select'
        >
          <option value=''>Select a breed</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
        <button type='submit' disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div className='error-message'>{error}</div>}

      <div className='cats-grid'>
        {cats.map((cat) => (
          <div key={cat.id} className='cat-card'>
            <img src={cat.url} alt='Cat' loading='lazy' />
            <div className='card-buttons'>
              <button
                className={`icon-button favorite-button ${
                  isFavorite(cat.id) ? 'active' : ''
                }`}
                onClick={() => handleFavoriteClick(cat.id)}
                aria-label={
                  isFavorite(cat.id)
                    ? 'Remove from favorites'
                    : 'Add to favorites'
                }
              >
                <Heart
                  className={`heart-icon ${isFavorite(cat.id) ? 'filled' : ''}`}
                />
              </button>
              <Link
                to={`/cat/${cat.id}`}
                className='details-button'
                aria-label='View cat details'
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
