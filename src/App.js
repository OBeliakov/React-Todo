import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'
import AddField from './components/add-field'

class App extends Component {
  state = {
    searchValue: '',
    deletedValue: false,
    todoCount: 3,
    addValue: null,
    todoArr : [
      {
        activity:'Do Homework',
        id: 'HW0',
        done: false,
        important: false
      }, 
      {
        activity:'Go shopping',
        id:'GS1',
        done: false,
        important: false
      }, 
      {
        activity:'Wash dishes',
        id: 'WD2',
        done: false,
        important: false
      }
    ]
  }

  calculateIndex = (array, id) => {
    return array.findIndex((el) => {
      return el.id === id
    })
  }

  idGenerator = (value, array) => {
    let space = value.indexOf(' ')
    const idString = (value.slice(0,1) + value.slice(space + 1, space + 2) + array.length).toUpperCase()
    return idString
  }

  getSearchResult = (value) => {
    this.setState({
      searchValue: value
    })  
  }

  getAddResult = (value) => {
    this.setState({
      addValue: value
    })  
  }

  addItem = (addValue) => {
    this.setState(({todoArr}) => {
      let obj = {
        activity: addValue,
        id: this.idGenerator(addValue, todoArr),
        done: false,
        important: false
      }

      let addingTodo = todoArr.concat()
      addingTodo.push(obj)

      return {
        todoArr: addingTodo
      }
    })
  }

  constructArray = (array, index, action) => {
    if (action === 'delete') {
      const newArray = array.slice(0, index)
                            .concat(array.slice(index + 1, array.length))
      return newArray
    }

    const oldItem = array[index]
    const newItem = {...oldItem, ...oldItem[action] = !oldItem[action]}
    const newArray = array.slice(0, index)
                          .concat(newItem)
                          .concat(array.slice(index + 1, array.length))
    return newArray
  }

  onToggleAction = (id, action) => {
    this.setState(({todoArr}) => {
      const idx = this.calculateIndex(todoArr,id)
      const newArray = this.constructArray(todoArr, idx, action )
      return {
        todoArr: newArray
      }
    })
  }
 
  render() {
    const {searchValue, todoArr, addValue} = this.state

    const todoCount = todoArr.filter((item) => {
      return !item.done
    })

    const doneCount = todoArr.length - todoCount.length

    return (
      <div className="App">
        <AppHeader 
          todoCount={todoCount.length}  
          doneCount={doneCount} 
        />
        <SearchPanel 
          getSearchResult={this.getSearchResult} 
        />
        <TodoList 
          onToggleAction={this.onToggleAction} 
          searchValue={searchValue} 
          todo={todoArr} 
        />
        <AddField 
          addValue={addValue} 
          addItem={this.addItem} 
          getAddResult={this.getAddResult} 
        />
      </div>
    );
  }
}

export default App;
