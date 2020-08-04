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
      <button>Submit</button>
      <button onClick={props.clearCompleted}>Clear</button>
    </form>
  );
};

export default TodoForm;