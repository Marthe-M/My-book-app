import React from 'react'
import Searchbar from './components/Searchbar'
import Bookcontainer from './components/Bookcontainer'
require('dotenv').config()

function App () {
  return (
    <div className='App'>
      <Searchbar />
      <Bookcontainer />
    </div>
  )
}

export default App
