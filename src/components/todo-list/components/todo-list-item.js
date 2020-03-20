import React from 'react'
import './todo-list-item.css'
import cn from 'classnames'

class TodoListItem extends React.Component {
  state = {
    done: false,
    importantMark: false,
  }

  makeImportantClick = () => {
    this.setState(({importantMark}) => {
      return {
        importantMark: !importantMark,
      }
    })
  }

  makeDoneClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  }

  onDelete = () => {
    const {getDeletedValue, id} = this.props
    getDeletedValue(id)
  }

  render() {
    const {importantMark, done} = this.state
    const {activity, id} = this.props
    
    return (
      <li className='list-group-item' key={id}>
        <span onClick={this.makeDoneClick} className={cn('label' , {'marked' : importantMark}, {'done' : done})}>{activity}</span>
        <button type="button" onClick={this.makeImportantClick}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button onClick={this.onDelete} type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </li>
    )
  }
}
export default TodoListItem