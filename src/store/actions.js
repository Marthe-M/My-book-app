export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'
export const SHOW_BOOK_NUMBER = 'SHOW_BOOK_NUMBER'
export const CHANGE_QUERY = 'CHANGE_QUERY'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const SHOW_FAVORITES = 'SHOW_FAVORITES'
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES'

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  }
}

export const fetchBooksSuccess = books => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books
  }
}

export const fetchBooksFailure = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  }
}

export const showNumberOfBooks = number => {
  return {
    type: SHOW_BOOK_NUMBER,
    payload: number
  }
}

export const changeQuery = string => {
  return {
    type: CHANGE_QUERY,
    payload: string
  }
}

export const addNewFavorite = book => {
  return {
    type: ADD_FAVORITE,
    payload: book
  }
}
export const showMyFavorites = () => {
  return {
    type: SHOW_FAVORITES
  }
}

export const removeMyFavorites = () => {
  return {
    type: REMOVE_FAVORITES
  }
}

export const fetchBooks = () => {
  return function (dispatch, getState) {
    dispatch(fetchBooksRequest())
    const state = getState()
    const searchQuery = state.query
    console.log(searchQuery)
    const apiKey = process.env.REACT_APP_KEY
    fetch(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        searchQuery +
        '&key=' +
        apiKey +
        '&maxResults=40'
    )
      .then(response => response.json())
      .then(results => dispatch(fetchBooksSuccess(results.items)))
      .catch(error => {
        dispatch(fetchBooksFailure(error.message))
      })
  }
}
