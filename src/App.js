import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./components/todos-list.component"
import EditTodo from "./components/edit-todo.component"
import CreateTodo from "./components/create-todo.component"

import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <div className="container">
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="https://www.google.com/" target="_blank">
            <img src={logo} width="30" height="30"/>
          </a>
          <Link to="/" className="navbar-brand">MERN-STACK Todo App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodoList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
      </div>
    </Router>
  );
}

export default App;
