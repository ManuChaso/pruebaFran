import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchCatDetails } from '../../../services/api'
import { Heart, ArrowLeft, Info } from 'lucide-react'
import { useFavorites } from '../../hooks/useFavorites'
import Loader from '../Loader/Loader'
import './CatDetails.css'
import PropTypes from 'prop-types'

function CatDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [cat, setCat] = useState(null)
  const [loading, setLoading] = useState(false)
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const loadCat = async () => {
      setLoading(true)
      try {
        const data = await fetchCatDetails(id)
        setCat(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadCat()
  }, [id])

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  if (loading) return <Loader />
  if (!cat) return <div className='error-message'>No details found</div>

  const breed = cat.breeds?.[0]

  return (
    <div className='cat-details-container'>
      <button onClick={() => navigate(-1)} className='back-button'>
        <ArrowLeft /> Back
      </button>

      <div className='cat-details-content'>
        <div className='cat-image-container'>
          <img
            src={cat.url}
            alt={breed?.name || 'Cat'}
            className={`cat-image ${isImageLoaded ? 'loaded' : ''}`}
            onLoad={() => setIsImageLoaded(true)}
          />
          <button
            className={`favorite-button ${isFavorite(id) ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={
              isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'
            }
          >
            <Heart className='heart-icon' />
          </button>
        </div>

        <div className='cat-info'>
          {breed ? (
            <>
              <h1>{breed.name}</h1>
              <div className='info-grid'>
                <InfoItem
                  icon={<Info />}
                  label='Temperament'
                  value={breed.temperament}
                />
                <InfoItem icon={<Info />} label='Origin' value={breed.origin} />
                {breed.life_span && (
                  <InfoItem
                    icon={<Info />}
                    label='Life Span'
                    value={`${breed.life_span} years`}
                  />
                )}
                {breed.weight?.metric && (
                  <InfoItem
                    icon={<Info />}
                    label='Weight'
                    value={`${breed.weight.metric} kg`}
                  />
                )}
              </div>

              {breed.description && (
                <div className='description'>
                  <h2>About</h2>
                  <p>{breed.description}</p>
                </div>
              )}

              {breed.wikipedia_url && (
                <a
                  href={breed.wikipedia_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='wiki-link'
                >
                  Learn More on Wikipedia
                </a>
              )}
            </>
          ) : (
            <h1>Beautiful Cat</h1>
          )}
        </div>
      </div>
    </div>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div className='info-item'>
      {icon}
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </div>
  )
}

InfoItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default CatDetails
