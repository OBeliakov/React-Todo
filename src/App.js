import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'

class App extends Component {
  state = {
    searchValue: '',
    deletedValue: false,
    todoArr : [
      {
        activity:'Do Homework',
        id: 'HW'
      }, 
      {
        activity:'Go to shop',
        id:'SHP'
      }, 
      {
        activity:'Wash dishes',
        id: 'DSH'
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

 
  render() {
    const {searchValue, todoArr} = this.state
    return (
      <div className="App">
        <AppHeader/>
        <SearchPanel getSearchResult={this.getSearchResult} />
        <TodoList getDeletedValue={this.getDeletedValue} searchValue={searchValue} todo={todoArr} />
      </div>
    );
  }
}

export default App;
