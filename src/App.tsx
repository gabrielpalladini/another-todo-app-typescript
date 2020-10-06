import React, { useState } from 'react';
import Header from './components/Header'
import DoneList from './components/DoneList'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { v4 as uuid } from 'uuid'
import './App.css';

export interface ITodo {
  id: any;
  description: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id: any;
  description: string;
  isDone: boolean;

  constructor(description: string = '', isDone: boolean = false) {
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;
  }
}

function App() {

  const newTodos= [
    new Todo('Wash the Dishes'),
    new Todo('Watch a Movie')
];

const [ todos, setTodos ] = useState(newTodos); 

function addTodo(todo: Todo) {
  setTodos([todo, ...todos]);
}

  return (
    <div>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
      <DoneList todos={todos} />
    </div>
  );
}

export default App;
