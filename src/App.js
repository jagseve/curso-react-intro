import logo from './platzi.webp';
import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoBotton } from './TodoBotton';

const defaultTodo =[{text: 'Cortar cebolla', completed: true},
{text: 'Llorar con la Llorona', completed: false},{text: 'Terminar el curso de React.js', completed: false},
{text: 'lalallalalalla', completed: true},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={35}/>
      <TodoCounter completed={12} total={35}/>
      <TodoCounter completed={10} total={35}/>
      <TodoCounter completed={89} total={35}/>
      <TodoSearch/>
      <TodoList>
       {defaultTodo.map(todo => (
        <TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />
       ))}
      </TodoList>
      <TodoBotton/>
      
    </React.Fragment>
    )
}

      

export default App;
