import React from 'react'
import './Todo.css'

const Todo = props => {
    return (
        <div 
        onClick={() => props.toggleTodoCompleted(props.todo.id)} 
        className={props.todo.completed ? 'completed' : ''} // the boolean variable ? is true : is false 
        >

        <p>{props.todo.task}</p>

        </div>
    );
};
export default Todo;
