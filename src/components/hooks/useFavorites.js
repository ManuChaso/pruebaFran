import { useState, useEffect } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem('catFavorites')) || []
    setFavorites(storedFavorites)
  }, [])

  const addFavorite = (catId) => {
    const updatedFavorites = [...favorites, catId]
    localStorage.setItem('catFavorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const removeFavorite = (catId) => {
    const updatedFavorites = favorites.filter((id) => id !== catId)
    localStorage.setItem('catFavorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const isFavorite = (catId) => {
    return favorites.includes(catId)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }
}
