import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoBotton } from './TodoBotton';

const defaultTodo =[
{text: 'Cortar cebolla', completed: true},
{text: 'Llorar con la Llorona', completed: false},{text: 'Terminar el curso de React.js', completed: false},
{text: 'LALALALALALA', completed: true},
{text: 'Realizar estados ligados entre funciones pares a hijas', completed: true}
]

function App() {
  const [todos,setTodos]=React.useState(defaultTodo);
  const [searchValue, setSearchValue]=React.useState('');
  console.log('se renderizó un nuevo valor  '+ searchValue);

  const completedTodos= todos.filter(todo =>!!todo.completed).length;
  const totalTodos =todos.length;
  const searchedTodos=todos.filter((todo) =>{
    const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return(
     todoText.includes(searchText))
    });

    const completeTodo =(text)=>{
      const newTodo=[...todos];
      const todoIndex= newTodo.findIndex(
        (todo)=>todo.text==text
        );
      newTodo[todoIndex].completed=true;
      setTodos(newTodo)
    }
    const deleteTodo =(text)=>{
      const newTodo=[...todos];
      const todoIndex= newTodo.findIndex(
        (todo)=>todo.text==text
        );
      newTodo.splice(todoIndex,1)
      setTodos(newTodo)
    }


    
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>

      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
       {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={()=>completeTodo(todo.text)}
        onDelete={()=>deleteTodo(todo.text)}
        />
       ))}
      </TodoList>
      <TodoBotton/>
      
    </>
    )
}

      

export default App;
