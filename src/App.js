import React from 'react';
import logo from './logoInshorts.png';
import TodoTable from './todo-table.js';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="180" height="250" />
          <br/><br/><h1>My Todo List</h1><br/><br/>
          <TodoTable store={this.props.state}/>
        </header>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(App);
