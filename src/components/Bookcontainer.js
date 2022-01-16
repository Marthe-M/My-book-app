import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../store/actions.js'
import { HeartFilled, BookOutlined } from '@ant-design/icons'
import { addNewFavorite } from '../store/actions.js'

export default function Bookcontainer () {
  const dispatch = useDispatch()
  const bookData = useSelector(state => state.data)
  const showResults = useSelector(state => state.showResults)
  const favoriteBooks = useSelector(state => state.favorites)
  const showFavorites = useSelector(state => state.showFavorites)

  const listItems =
    bookData &&
    bookData
      .map(book => (
        <li key={book.id} className='book-item'>
          <img
            src={
              book.volumeInfo.imageLinks === undefined
                ? ''
                : `${book.volumeInfo.imageLinks.thumbnail}`
            }
            alt='No book cover available'
          />
          <div className='book-text'>
            <h4>
              <BookOutlined />
              {book.volumeInfo.title}
            </h4>
            <p>{book.volumeInfo.authors[0]}</p>
          </div>
          <div className='favorite-box'>
            <button
              type='submit'
              className='favorite-button'
              onClick={() => dispatch(addNewFavorite(book))}
            >
              <HeartFilled className='heart-icon' />
            </button>
          </div>
        </li>
      ))
      .slice(0, showResults)
  const listFavorites = favoriteBooks.map(book => (
    <li key={book.id} className='book-item'>
      <img
        src={
          book.volumeInfo.imageLinks === undefined
            ? ''
            : `${book.volumeInfo.imageLinks.thumbnail}`
        }
        alt='No book cover available'
      />
      <div className='book-text'>
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.authors[0]}</p>
      </div>
    </li>
  ))

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  return (
    <div>
      {showFavorites ? (
        <ul className='book-container'>{listFavorites}</ul>
      ) : (
        <ul className='book-container'>{listItems}</ul>
      )}
    </div>
  )
}
