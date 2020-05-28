import React from 'react';

class TodoTable extends React.Component {
  render() {
    //let list = this.props.state.getState();
    //console.log(this.props);
    return (
      <form>
        <input type="text" name="newtodo" placeholder="Add new item..." required />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default TodoTable;
