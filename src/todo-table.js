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
    this.props.store.addTodo(this.state.tempTodo);
    this.setState({
      tempTodo: ''
    })
    e.preventDefault();
  }
  handleDelete = (todoItem) => {
    this.props.store.deleteTodo(todoItem);
  }
  render() {
    this.handleDelete = this.handleDelete.bind(this);
    //console.log(this);
    let list = this.props.store.state;
    return (
      <div id = "todo-table" className = "ListofItems">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="newtodo" placeholder="Add new item..." onChange={this.handleChange} required />
          <button type="submit">Add Item</button>
        </form>
        <ul>
        {
          list.map((value,index) => {
            return <li key={index} onClick={()=>{this.handleDelete(value)}}>{value}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default TodoTable;
