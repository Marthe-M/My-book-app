import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../store/actions.js'
import { StarTwoTone, BookOutlined } from '@ant-design/icons'
import { addNewFavorite } from '../store/actions.js'

export default function Bookcontainer () {
  const dispatch = useDispatch()
  const bookData = useSelector(state => state.data)
  const showResults = useSelector(state => state.showResults)
  const favoriteBooks = useSelector(state => state.favorites)
  const showFavorites = useSelector(state => state.showFavorites)
  const listItems = bookData
    .map(book => (
      <li key={book.id} className='book-item'>
        <BookOutlined style={{ fontSize: '30px' }} />

        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.subtitle}</p>
        <div className='line'></div>
        <img
          src={
            book.volumeInfo.imageLinks === undefined
              ? ''
              : `${book.volumeInfo.imageLinks.thumbnail}`
          }
          alt='No book cover available'
        />
        <div className='favorite-box'>
          <h3 className='favorite-text'>Favorite: </h3>
          <button
            type='submit'
            className='favorite-button'
            onClick={() => dispatch(addNewFavorite(book))}
          >
            <StarTwoTone twoToneColor='#ebc92f' style={{ fontSize: '23px' }} />
          </button>
        </div>
      </li>
    ))
    .slice(0, showResults)
  const listFavorites = favoriteBooks.map(book => (
    <li key={book.id} className='book-item'>
      <h3>{book.volumeInfo.title}</h3>

      <img
        src={
          book.volumeInfo.imageLinks === undefined
            ? ''
            : `${book.volumeInfo.imageLinks.thumbnail}`
        }
        alt='No book cover available'
      />
    </li>
  ))

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  return (
    <div>
      <h2>Books</h2>
      {showFavorites ? (
        <ul className='book-container'>{listFavorites}</ul>
      ) : (
        <ul className='book-container'>{listItems}</ul>
      )}
    </div>
  )
}
