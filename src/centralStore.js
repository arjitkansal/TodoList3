import { createStore } from 'redux';

//Initial List of todo-items;
let listTodo = [];

// Reducer
function updater(state = listTodo, action) {
  if(action.type === 'ADD_TODO') {
    return
  }
}

const store = createStore(updater);

const todoAction = { type: 'ADD', todo: 'sample list item'};

store.dispatch(todoAction);
