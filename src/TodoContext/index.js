import React from 'react'
import {useLocalStorage} from './useLocalStorage'

const TodoContext=React.createContext();

function TodoProvider({Children}) {
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
        }=useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue]=React.useState('');
      
      const completedTodos= todos.filter((todo) =>!!todo.completed).length;
      const totalTodos =todos.length;
      
      console.log('log 1');
    
      React.useEffect(()=>{
        console.log('loooooooooog 2');
      }, [totalTodos]);
    
      console.log('log 3');
      
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
    <TodoContext.Provider value={{
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }}>
        {Children}

    </TodoContext.Provider>

   ) 

}



export {TodoContext,TodoProvider}