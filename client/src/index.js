import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(<App />, document.getElementById('create-todo-form'));

// const wrapper = document.getElementById("create-todo-form");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;
