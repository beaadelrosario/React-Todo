import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      formValue:'',
      todos: [],
    };
  };
  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(), // or Math.random() works
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  changeTodo = e => {
    let value = e.target.value
    this.setState({
      formValue: value 
    })
  };
  onSubmit = e => {
    e.preventDefault()
    this.addTodo(this.state.formValue);
    this.setState({
      formValue: ""
    })
  };
  toggleTodoCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    })
  };
  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item =>
        item.completed === false)
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        formValue={this.state.formValue}
        changeTodo={this.changeTodo}
        clearCompleted={this.clearCompleted}
        onSubmit={this.onSubmit}
        />
        <TodoList
        todos={this.state.todos}
        toggleTodoCompleted={this.toggleTodoCompleted}
        />
      </div>
    );
  }
}
export default App;
