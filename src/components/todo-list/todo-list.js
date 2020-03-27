import React from 'react'
import TodoListItem from './components/todo-list-item'

 const TodoList = ({ todo, searchValue, getDeletedValue, onToggleAction, filteredValue }) => {
    const searchItems = (array, searchValue) => {
      return array.filter(({activity}) => {
        return activity
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) !== -1
      })
    }

    const filterItems = (array, filterValue) => {
      if (filterValue ==='all') {
        return array
      } else if (filterValue === 'done') {
        return array.filter((item) => {
          return item.done
        })
      } else {
        return array.filter((item) => {
          return !item.done
        })
      } 
    }

    const searchingItems = searchItems(todo, searchValue)
    const filteringItems = filterItems(todo, filteredValue)

    const listItems = searchValue ? searchingItems : filteredValue ? filteringItems  : todo
    return (
      <ul>
         {
          listItems.map((item) => {
            return (
            <TodoListItem 
              onToggleAction={onToggleAction}
              getDeletedValue={getDeletedValue} 
              id={item.id} 
              activity={item.activity} 
              important={item.important}
              done={item.done}
              />
            )
          })
         }
      </ul>
    )
 }

 export default TodoList