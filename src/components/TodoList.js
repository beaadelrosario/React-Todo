// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(item => (
                <Todo
                key={item.id}
                todo={item}
                toggleTodoCompleted={props.toggleTodoCompleted} 
                />
            ))}
        </ul>
    )
}

export default TodoList;
