import React from 'react'
import TodoListItem from './components/todo-list-item'

 const TodoList = ({ todo, searchValue, getDeletedValue }) => {
    const searchItems = (array, searchValue) => {
      return array.filter(({activity}) => {
        return activity
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) !== -1
      })
    }

    const searchingItems = searchItems(todo, searchValue)

    const listItems = searchValue ? searchingItems : todo
    return (
      <ul>
         {
          listItems.map((item) => {
            return <TodoListItem getDeletedValue={getDeletedValue} id={item.id} activity={item.activity}/>
          })
         }
      </ul>
    )
 }

 export default TodoList