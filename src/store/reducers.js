import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  SHOW_BOOK_NUMBER,
  CHANGE_QUERY,
  ADD_FAVORITE,
  SHOW_FAVORITES,
  REMOVE_FAVORITES
} from './actions.js'

const initialState = {
  data: [],
  loading: true,
  error: null,
  showResults: 20,
  query: 'Murakami',
  favorites: [],
  showFavorites: false
}

const reducer = (state = initialState, action) => {
  console.log('Type', action.type)
  console.log('Payload', action.payload)
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload
      }
    case SHOW_BOOK_NUMBER:
      return {
        ...state,
        loading: false,
        showResults: action.payload
      }
    case CHANGE_QUERY:
      return {
        ...state,
        loading: false,
        query: action.payload
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload)
      }
    case SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: true
      }
    case REMOVE_FAVORITES:
      return {
        ...state,
        showFavorites: false,
        favorites: []
      }
    default:
      return state
  }
}

export default reducer
