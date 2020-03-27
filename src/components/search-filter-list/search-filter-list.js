import React from 'react'
import './search-filter-list.css'
import cn from 'classnames'

const SearchFilterList = ({onFilter,filteredValue}) => {

  const onFilterThis = (e) => {
    onFilter(e.target.dataset.info)
  }

  const buttons = [
    {name:'all', label: 'All'},
    {name:'active', label: 'Active'},
    {name:'done', label: 'Done'},
  ]

  return ( 
    <ul className='search-filter-list'>
      {buttons.map((item) => {
        const isActive = filteredValue === item.name
        return (
          <li>
            <button
            onClick={onFilterThis}
            type="button" 
            className={cn("btn", 
            {'btn-outline-secondary': !isActive}, 
            {"btn-info": [isActive]})} 
            data-info={item.name}>
              {item.label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default SearchFilterList