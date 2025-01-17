import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import './CatCard.css'

function CatCard({ cat, isFavorite = false, onFavoriteClick = () => {} }) {
  if (!cat || !cat.url) return null

  return (
    <div className='cat-card'>
      <img src={cat.url} alt='Cat' />
      <div className='cat-card-actions'>
        <Link to={`/cat/${cat.id}`}>View Details</Link>
        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={onFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className='heart-icon' />
        </button>
      </div>
    </div>
  )
}

CatCard.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  isFavorite: PropTypes.bool,
  onFavoriteClick: PropTypes.func
}

export default CatCard
