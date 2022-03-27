import React from 'react';
import "./App.css"
import Todo from './Todo';
import TodoList from './TodoList';
import { Navbar, NavbarBrand } from "reactstrap";

const App = () => (
  <div className="App">
    {headerDisplay(headerTitle)}
    <br />
    <TodoList />
  </div>
);

const headerTitle = "Todoifier";

const headerDisplay = (title) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{title}</NavbarBrand>
  </Navbar>
)




export default App;
