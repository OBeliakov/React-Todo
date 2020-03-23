import React from 'react'
import './search-filter-list.css'

const SearchFilterList = () => {
  return (
    <ul className='search-filter-list'>
      <li>
        <button type="button" className="btn btn-info">
          All
        </button>
      </li>
       <li>
         <button type="button" className="btn btn-outline-secondary">
          Active
         </button>
        </li>
       <li>
         <button type="button" className="btn btn-outline-secondary">
          Done
         </button>
      </li>
    </ul>
  )
}

export default SearchFilterList