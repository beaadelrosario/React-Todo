import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        name="todo"
        value={props.value}
        onChange={props.handleTodoChange}
      />
      <button onClick={props.handleAddTodo}>Submit</button>
      <button onClick={props.handleClearTodos}>Clear</button>
    </form>
  );
};

export default TodoForm;