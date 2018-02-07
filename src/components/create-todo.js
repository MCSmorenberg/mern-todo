import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class CreateTodo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Put your todo here!" ref="createInput" />
        <button>Submit</button>
      </form>
    )
  }

  handleCreate(event) {
    event.preventDefault();

    this.props.createTask(this.refs.createInput.value);
  }
}
