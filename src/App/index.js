
import React from 'react';
import { AppUi } from './AppUi';
import { useLocalStorage } from './useLocalStorage';

/*const defaultTodo =[
{text: 'Cortar cebolla', completed: true},
{text: 'Llorar con la Llorona', completed: false},{text: 'Terminar el curso de React.js', completed: false},
{text: 'LALALALALALA', completed: true},
{text: 'Realizar estados ligados entre funciones pares a hijas', completed: true}
]*/

/*localStorage.setItem('TODOS_V1', defaultTodo);
localStorage.removeItem('TODOS_V1');*/



function App() {
  
  const [todos,saveTodos]=useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue]=React.useState('');
  console.log('se renderizó un nuevo valor  '+ searchValue);

  const completedTodos= todos.filter(todo =>!!todo.completed).length;
  const totalTodos =todos.length;
  const searchedTodos=todos.filter((todo) =>{
    const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return(
     todoText.includes(searchText))
    }
    );

    const completeTodo =(text)=>{
      const newTodo=[...todos];
      const todoIndex= newTodo.findIndex(
        (todo)=>todo.text===text
        );
      newTodo[todoIndex].completed=true;
      saveTodos(newTodo)

    }
    const deleteTodo =(text)=>{
      const newTodo=[...todos];
      const todoIndex= newTodo.findIndex(
        (todo)=>todo.text===text
        );
      newTodo.splice(todoIndex,1) 
      saveTodos(newTodo)
    }

    return(
      <AppUi
      completedTodos={completedTodos}
      totalTodos={ totalTodos}
      searchValue={ searchValue}
      setSearchValue={ setSearchValue}
      searchedTodos={searchedTodos }
      completeTodo={ completeTodo}
      deleteTodo={ deleteTodo}
      
      />
    )

}

export default App;
