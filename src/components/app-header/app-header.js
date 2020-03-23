import React from 'react'

const AppHeader = ({todoCount, doneCount}) => {
   return (
   <div>
      <h1>Todo List</h1>
      <p>{todoCount} need to do. {doneCount} done.</p>
   </div>
   )
}

export default AppHeader