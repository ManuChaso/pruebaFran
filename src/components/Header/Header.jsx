import { Link } from 'react-router-dom'
import { Cat, Home, Search, Heart, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='header-container'>
        <Link to='/' className='logo' onClick={handleMenuClose}>
          <Cat className='cat-icon' />
          <span>Cat Explorer</span>
        </Link>

        <button
          className='mobile-menu-btn'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to='/' className='nav-link' onClick={handleMenuClose}>
            <Home className='nav-icon' />
            <span>Home</span>
          </Link>
          <Link to='/search' className='nav-link' onClick={handleMenuClose}>
            <Search className='nav-icon' />
            <span>Search</span>
          </Link>
          <Link to='/favorites' className='nav-link' onClick={handleMenuClose}>
            <Heart className='nav-icon' />
            <span>Favorites</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
