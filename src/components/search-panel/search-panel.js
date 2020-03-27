import React from 'react'
import SearchInput from '../search-input'
import SearchFilterList from '../search-filter-list'
import './search-panel.css'

const SearchPanel = ({getSearchResult, todoCount, doneCount, todo, onFilter, filteredValue}) => {
  return (
    <form className="search-panel">
      <SearchInput getSearchResult={getSearchResult} />
      <SearchFilterList 
        onFilter={onFilter} 
        todoCount={todoCount} 
        doneCount={doneCount} 
        todo={todo}
        filteredValue={filteredValue} />
    </form>
  )
}

export default SearchPanel