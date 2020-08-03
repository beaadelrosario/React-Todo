import React from 'react'

const Todo = props => {
    return (
        <div 
        onClick={() => props.handleToggleCompleted(props.todo.id)}
        >

        <p>{props.todo.task}</p>

        </div>
    );
};
export default Todo;
