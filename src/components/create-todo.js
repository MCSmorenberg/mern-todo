import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class CreateTodo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Put your todo here!" ref="createInput" />
        <button>Submit</button>
      </form>
    )
  }
}
