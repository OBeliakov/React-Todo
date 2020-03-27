import React from 'react'
import './todo-list-item.css'
import cn from 'classnames'

const TodoListItem = ({activity, id, important, done, onToggleAction}) => {

   const makeImportantClick = () => {
    onToggleAction(id, 'important')
  }

   const makeDoneClick = () => {
    onToggleAction(id, 'done')
  }

   const onDelete = () => {
    onToggleAction(id, 'delete')
  }

    return (
      <li className='list-group-item' key={id}>
        <span onClick={makeDoneClick} className={cn('label' , {'marked' : important}, {'done' : done})}>{activity}</span>
        <button type="button" onClick={makeImportantClick}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button onClick={onDelete} type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </li>
    )
  }
export default TodoListItem