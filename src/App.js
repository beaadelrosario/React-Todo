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
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo:''
    };
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

  changeTodo = event => this.setState ({
    [event.target.name]: event.target.vaue
  });

  toggleTodoCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed =  !todo.completed;
        return todo;
      }else {
        return todo;
      }
    });
    this.setState({todos});
  };

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(item =>
      !item.completed);
      this.setState({todos});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        value={this.state.todo}
        handleTodoChange={this.changeTodo}
        handleAddTodo={this.newTodo}
        handleClearTodos={this.clearCompleted}
        />
        <TodoList
        todos={this.state.todos}
        handleToggleCompleted={this.toggleTogoCompleted}
        />
      </div>
    );
  }
}

export default App;
