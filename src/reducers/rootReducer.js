const initState = [];

//  [
//    'Learn git',
//    'Learn JS',
//    'Learn KOA.js',
//    'Learn React',
//    'Make To-do List',
//  ];

const rootReducer = (state = initState, action) => {
  if(action.type === 'ADD_TODO') {
    return [...state, action.todo];
  }
  else if(action.type === 'DELETE_TODO') {
    //console.log(action);
    let arr = state;
    return arr.filter((todo) => action.todo!==todo);
  }
  return state;
}

export default rootReducer;
