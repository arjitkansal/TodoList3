import React from 'react';
import logo from './logoInshorts.png';
import TodoTable from './todo-table.js'

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="180" height="250" />
          <h1>My Todo List</h1>
          <TodoTable store={this.props.store}/>
        </header>
      </div>
    );
  }
}

export default App;
