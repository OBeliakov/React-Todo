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
    addValue: null,
    todoArr : [
      {
        activity:'Do Homework',
        id: 'HW0'
      }, 
      {
        activity:'Go shopping',
        id:'GS1'
      }, 
      {
        activity:'Wash dishes',
        id: 'WD2'
      }
    ]
  }

  getSearchResult = (value) => {
    this.setState({
      searchValue: value
    })  
  }

  getDeletedValue = (id) => { 
    this.setState(({todoArr}) => {
      const idx = todoArr.findIndex((el) => {
        return el.id === id
      })
  
      const remainingTodo = todoArr.slice(0, idx).concat(todoArr.slice(idx + 1, todoArr.length))

      return {
        todoArr: remainingTodo 
      }
    })
  }

  getAddResult = (value) => {
    this.setState({
      addValue: value
    })  
  }

  idGenerator = (value, array) => {
    let space = value.indexOf(' ')
    const idString = (value.slice(0,1) + value.slice(space + 1, space + 2) + array.length).toUpperCase()
    return idString
  }

  addItem = (addValue) => {
    this.setState(({todoArr}) => {
      let obj = {
        activity: addValue,
        id: this.idGenerator(addValue, todoArr)
      }

      let addingTodo = todoArr.concat()
      addingTodo.push(obj)

      console.log(todoArr, addingTodo)
      return {
        todoArr: addingTodo
      }
    })
  }

  

 
  render() {
    const {searchValue, todoArr, addValue} = this.state
    return (
      <div className="App">
        <AppHeader/>
        <SearchPanel getSearchResult={this.getSearchResult} />
        <TodoList getDeletedValue={this.getDeletedValue} searchValue={searchValue} todo={todoArr} />
        <AddField addValue={addValue} addItem={this.addItem} getAddResult={this.getAddResult} />
      </div>
    );
  }
}

export default App;
