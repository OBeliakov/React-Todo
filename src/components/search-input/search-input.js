import React from 'react'
import './search-input.css'

const SearchInput = ({getSearchResult}) => {

  const typeSearch = (e) => {
    getSearchResult(e.currentTarget.value)
  }

  return (
    <input 
      placeholder="Type to search" 
      onChange={typeSearch} 
      className='form-control search-input' 
      type='search'
    />
  )
}

export default SearchInput