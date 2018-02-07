import React, { Component } from "react";
import ReactDOM from "react-dom";
import CreateTodo from "./create-todo";
import TodosList from "./todos-list";

const todos = [
  {
      task: 'make React tutorial',
      isCompleted: false
  },
  {
      task: 'eat dinner',
      isCompleted: true
  }
];

export default class App extends React.Component {
  constructor(props) { // The constructor method is a special method for creating and initializing an object created with a class
    super(props); // A constructor can use the super keyword to call the constructor of the super class.
    // When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.
    console.log('Hallo?Hallo?Hallo?Hallo?Hallo?');
    console.log(props);

    this.state = {
        todos
    };
  }

  render() {
      return (
          <div>
              <h1>React ToDo App</h1>

              <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
              <TodosList
                  todos={this.state.todos}
              />
          </div>
      );
  }

  createTask(task) {
    this.state.todos.push({
        task,
        isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }
}
