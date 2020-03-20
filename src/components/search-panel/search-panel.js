import React from 'react'
import SearchInput from '../search-input'
import SearchFilterList from '../search-filter-list'
import './search-panel.css'

const SearchPanel = ({getSearchResult}) => {
  return (
  <div className="search-panel">
    <SearchInput getSearchResult={getSearchResult} />
    <SearchFilterList />
  </div>
  )
}

export default SearchPanel