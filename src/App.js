import React from 'react';
import logo from './logoInshorts.png';
import TodoTable from './todo-table.js';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <br/><br/>
          <img src={logo} className="App-logo" alt="logo" width="180" height="250" />
          <br/><br/><h1>My Todo List</h1><br/><br/>
          <TodoTable store={this.props}/>
        </header>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { state };
}

let mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todoitem) => { dispatch({type:'ADD_TODO', todo: todoitem}) },
    deleteTodo: (todoitem) => { dispatch({type:'DELETE_TODO', todo: todoitem})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
