import React, { useState } from 'react'
import logo from '../images/header-books.jpg'

import { useDispatch } from 'react-redux'
import {
  showNumberOfBooks,
  changeQuery,
  fetchBooks,
  showMyFavorites,
  removeMyFavorites
} from '../store/actions.js'

export default function Searchbar () {
  const dispatch = useDispatch()

  const [query, setQuery] = useState('')
  const [numberResults, setNumberResults] = useState(20)
  const [showFavos, setShowFavos] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(query, numberResults)
    dispatch(showNumberOfBooks(parseInt(numberResults)))
    dispatch(changeQuery(query))
    dispatch(fetchBooks())
  }

  const showFavorites = () => {
    setShowFavos(true)
    dispatch(showMyFavorites(showFavos))
  }

  const removeFavorites = () => {
    dispatch(removeMyFavorites())
  }

  return (
    <div className='header-container'>
      <img src={logo} alt='Header' className='header-img' />
      <h1 className='centered'>Search and collect your favorite books</h1>
      <div className='centered-below'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='search'
            placeholder='Search here..'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button type='submit' className='submit-button'>
            Search
          </button>
          <div className='select-books'>
            <p style={{ color: 'white' }}>How many books to display:</p>
            <select onChange={e => setNumberResults(e.target.value)}>
              <option value={10}>10</option>
              <option value={20} selected='selected'>
                20
              </option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>
          </div>
        </form>
        <button
          type='submit'
          className='submit-button'
          onClick={() => showFavorites()}
        >
          Show Favorites
        </button>
        <button
          type='submit'
          className='submit-button'
          onClick={() => removeFavorites()}
        >
          Remove Favorites
        </button>
      </div>
    </div>
  )
}
