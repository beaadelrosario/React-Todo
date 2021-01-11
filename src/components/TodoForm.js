import React from 'react';

const TodoForm = props => {
    // console.log(props.formValue)
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="task"
        value={props.formValue}
        onChange={props.changeTodo}
      />
      <button>Add</button>
      <button onClick={props.clearCompleted}>New List</button>
    </form>
  );
};

export default TodoForm;