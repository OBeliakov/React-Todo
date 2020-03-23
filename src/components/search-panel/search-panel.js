import React from 'react'
import SearchInput from '../search-input'
import SearchFilterList from '../search-filter-list'
import './search-panel.css'

const SearchPanel = ({getSearchResult}) => {
  return (
  <form className="search-panel">
    <SearchInput getSearchResult={getSearchResult} />
    <SearchFilterList />
  </form>
  )
}

export default SearchPanel