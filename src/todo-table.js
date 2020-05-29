import React from 'react';
import './styles.css';

class TodoTable extends React.Component {
  state = {
    tempTodo: ''
  };
  handleChange = (e) => {
    this.setState({
      tempTodo: e.target.value
    });
  }
  handleSubmit = (e) => {
    //console.log(e);
    this.props.store.addTodo(this.state.tempTodo);
    this.setState({
      tempTodo: ''
    })
    e.preventDefault();
  }
  handleDelete = (todoItem) => {
    this.props.store.deleteTodo(todoItem);
  }
  printTodoList = (list) => {
    if (list.length === 0)
      return (<h3>No todo at the moment... Yay!!!</h3>);
    else
      return list.map((value,index) => {
        return <li key={index} onClick={()=>{this.handleDelete(value)}}>{value}</li>
      });
  }
  render() {
    //this.handleDelete = this.handleDelete.bind(this);
    //console.log(this);
    //let list = this.props.store.state;
    return (
      <div id = "todo-table" className = "ListofItems">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="newtodo" value={this.state.tempTodo} placeholder="Add new item..." onChange={this.handleChange} required />
          <button type="submit">Add Item</button>
        </form>
        <ul>{ this.printTodoList(this.props.store.state) }</ul>
      </div>
    );
  }
}

export default TodoTable;
