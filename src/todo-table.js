import React from 'react';
import './styles.css';

class TodoTable extends React.Component {
  render() {
    let list = this.props.store;
    return (
      <div id = "todo-table" className = "ListofItems">
        <form>
          <input type="text" name="newtodo" placeholder="Add new item..." required />
          <button type="submit">Add Item</button>
        </form>
        <ul>
        {
          list.map((value,index) => {
            return <li key={index}>{value}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default TodoTable;
